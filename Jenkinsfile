pipeline {
    agent any

    stages {
        stage('Pull Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Tranquynh-2135/DevOps.git'
            }
        }

         stage('Build Docker Image') {
            steps {
                sh 'docker build -t mywebapp:latest .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                  docker rm -f myweb || true
                  docker run -d -p 3000:3000 --name myweb mywebapp:latest
                '''
            }
        }
    }
}
