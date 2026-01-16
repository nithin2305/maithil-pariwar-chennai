import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../../services/contact-us.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

interface ContactMessage {
    id: number;
    name: string;
    email: string;
    message: string;
    createdAt: string;
}

@Component({
    selector: 'app-admin-contact-messages',
    templateUrl: './admin-contact-messages.component.html',
    styleUrls: ['./admin-contact-messages.component.scss']
})
export class AdminContactMessagesComponent implements OnInit {
    contactMessages: ContactMessage[] = [];
    isLoading: boolean = false;
    errorMessage: string = '';
    filteredMessages: ContactMessage[] = [];
    searchTerm: string = '';

    constructor(
        private contactUsService: ContactUsService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        // Debug logging
        console.log('Is logged in?', this.authService.isLoggedIn());
        console.log('Current user:', this.authService.currentUserValue);
        console.log('Is admin?', this.authService.isAdmin());

        // Check if user is admin
        if (!this.authService.isLoggedIn() || !this.authService.isAdmin()) {
            alert('Access denied. You must be logged in as an admin to view this page.');
            this.router.navigate(['/login']);
            return;
        }
        this.loadContactMessages();
    }

    loadContactMessages(): void {
        this.isLoading = true;
        this.errorMessage = '';

        this.contactUsService.getAllContactMessages().subscribe({
            next: (messages) => {
                this.contactMessages = messages;
                this.filteredMessages = messages;
                this.isLoading = false;
                console.log('Successfully loaded messages:', messages);
            },
            error: (error) => {
                console.error('Error loading contact messages:', error);
                console.error('Error status:', error.status);
                console.error('Error message:', error.message);
                console.error('Error details:', error.error);

                this.errorMessage = 'Failed to load contact messages. Please try again.';
                this.isLoading = false;

                // If unauthorized, redirect to login
                if (error.status === 403 || error.status === 401) {
                    alert('API returned ' + error.status + ': You do not have permission to view this page.');
                    this.router.navigate(['/login']);
                }
            }
        });
    }

    filterMessages(): void {
        if (!this.searchTerm.trim()) {
            this.filteredMessages = this.contactMessages;
            return;
        }

        const search = this.searchTerm.toLowerCase();
        this.filteredMessages = this.contactMessages.filter(msg =>
            msg.name.toLowerCase().includes(search) ||
            msg.email.toLowerCase().includes(search) ||
            msg.message.toLowerCase().includes(search)
        );
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    copyToClipboard(text: string): void {
        navigator.clipboard.writeText(text).then(() => {
            alert('Copied to clipboard!');
        });
    }
}
