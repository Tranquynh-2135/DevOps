pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/<username>/<repo>.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building app..."'
                # ví dụ nếu Node.js
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'echo "Running tests..."'
                # ví dụ chạy test Node.js
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying app..."'
                # ví dụ chạy docker-compose up
                sh 'docker build -t myapp:latest .'
                sh 'docker run -d -p 80:3000 myapp:latest'
            }
        }
    }
}
