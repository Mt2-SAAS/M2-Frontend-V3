pipeline {

    agent {
        docker {
            image 'node:15-alpine' 
            args '-p 3000:3000' 
        }
    }


    options {
        timeout(time: 4, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "luisito666/m2-api-rest:${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            when {
                branch 'master'
            }
            steps {
                sh '''
                    npm install -g @angular/cli
                    npm install
                    ng build --prod
                '''
                }
        }

        stage('Release') {
            when {
                branch 'master'
            }
            steps {
                dir('dist/metin2') {
                    archiveArtifacts artifacts: '**', fingerprint: true
                }
            }
        }

        stage('Publish') {
            when {
                branch 'master'
            }
            steps {
                sh '''
                echo Hola mundo
                '''
            }
        }

    }
}