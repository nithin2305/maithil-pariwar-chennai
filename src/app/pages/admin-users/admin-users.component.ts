import { Component, OnInit } from '@angular/core';
import { UserService, User, CreateUserRequest } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent implements OnInit {
    users: User[] = [];
    isLoading: boolean = false;
    errorMessage: string = '';
    successMessage: string = '';
    showCreateForm: boolean = false;

    newUser: CreateUserRequest = {
        username: '',
        email: '',
        password: '',
        role: 'USER'
    };

    constructor(
        private userService: UserService,
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (!this.authService.isLoggedIn() || !this.authService.isAdmin()) {
            alert('Access denied. Admin only.');
            this.router.navigate(['/login']);
            return;
        }
        this.loadUsers();
    }

    loadUsers(): void {
        this.isLoading = true;
        this.errorMessage = '';

        this.userService.getAllUsers().subscribe({
            next: (users) => {
                this.users = users;
                this.isLoading = false;
            },
            error: (error) => {
                console.error('Error loading users:', error);
                this.errorMessage = 'Failed to load users.';
                this.isLoading = false;

                if (error.status === 403 || error.status === 401) {
                    alert('Unauthorized access.');
                    this.router.navigate(['/login']);
                }
            }
        });
    }

    toggleCreateForm(): void {
        this.showCreateForm = !this.showCreateForm;
        if (!this.showCreateForm) {
            this.resetForm();
        }
    }

    createUser(): void {
        if (!this.newUser.username || !this.newUser.email || !this.newUser.password) {
            alert('Please fill in all fields.');
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';
        this.successMessage = '';

        this.userService.createUser(this.newUser).subscribe({
            next: (user) => {
                this.successMessage = `User ${user.username} created successfully!`;
                this.loadUsers();
                this.toggleCreateForm();
                this.isLoading = false;

                setTimeout(() => {
                    this.successMessage = '';
                }, 3000);
            },
            error: (error) => {
                console.error('Error creating user:', error);
                this.errorMessage = error.error || 'Failed to create user.';
                this.isLoading = false;
            }
        });
    }

    deleteUser(user: User): void {
        if (user.username === this.authService.currentUserValue?.username) {
            alert('You cannot delete your own account!');
            return;
        }

        if (!confirm(`Are you sure you want to delete user "${user.username}"?`)) {
            return;
        }

        this.userService.deleteUser(user.id).subscribe({
            next: () => {
                this.successMessage = `User ${user.username} deleted successfully!`;
                this.loadUsers();

                setTimeout(() => {
                    this.successMessage = '';
                }, 3000);
            },
            error: (error) => {
                console.error('Error deleting user:', error);
                this.errorMessage = 'Failed to delete user.';
            }
        });
    }

    resetForm(): void {
        this.newUser = {
            username: '',
            email: '',
            password: '',
            role: 'USER'
        };
    }

    getRoleBadgeClass(role: string): string {
        return role === 'ADMIN' ? 'badge-admin' : 'badge-user';
    }

    formatDate(dateString: string): string {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    }
}
