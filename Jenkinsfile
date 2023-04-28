pipeline {
    agent {
        docker {
            image 'node:14-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Vivek17000/News-Website'
            }
        }
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build'
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'npm run deploy'
            }
        }
    }
}