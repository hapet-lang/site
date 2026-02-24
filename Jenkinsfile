#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'docker compose down'
                sh 'docker compose build'
                sh 'docker compose up -d'
            }
        }
    }
}