#!/bin/bash

# Start Backend and Frontend Development Servers

echo "====================================="
echo "Maithil Pariwar Chennai - Dev Server"
echo "====================================="
echo ""

# Function to cleanup on exit
cleanup() {
    echo ""
    echo "Stopping servers..."
    kill $BACKEND_PID 2>/dev/null
    kill $FRONTEND_PID 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM

# Check if Java is installed
if ! command -v java &> /dev/null; then
    echo "Error: Java is not installed. Please install Java 17 or higher."
    exit 1
fi

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js 16 or higher."
    exit 1
fi

echo "Starting Backend Server..."
cd backend
mvn spring-boot:run > backend.log 2>&1 &
BACKEND_PID=$!
echo "Backend PID: $BACKEND_PID"
echo "Backend logs: backend/backend.log"
cd ..

# Wait for backend to start
echo "Waiting for backend to start..."
sleep 10

echo ""
echo "Starting Frontend Server..."
npm start > frontend.log 2>&1 &
FRONTEND_PID=$!
echo "Frontend PID: $FRONTEND_PID"
echo "Frontend logs: frontend.log"

echo ""
echo "====================================="
echo "Servers are starting..."
echo "====================================="
echo "Backend:  http://localhost:8080"
echo "Frontend: http://localhost:4200"
echo "H2 Console: http://localhost:8080/h2-console"
echo ""
echo "Press Ctrl+C to stop both servers"
echo "====================================="

# Wait indefinitely
wait
