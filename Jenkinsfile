pipeline {
    agent any


    options {
        timeout(time: 5, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "luisito666/m2-frontend:${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            steps {
                script {
                   dockerImage = docker.build("${env.ARTIFACT_ID}", "-f ./Dockerfile .") 
                }
            }
        }

        // stage('Testing') {
        //     steps {
        //         sh "docker run ${dockerImage.id} python manage.py test"
        //     }
        // }

        stage('Publish master') {
            when {
                branch 'master'
            }
            steps {
                script {
                    docker.withRegistry("", "DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }

        stage('Publish develop') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    docker.withRegistry("", "DockerHubCredentials") {
                        dockerImage.push()
                    }
                }
            }
        }
    }
}
