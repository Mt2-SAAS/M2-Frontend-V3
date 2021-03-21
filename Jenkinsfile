pipeline {
    agent any


    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    environment {
        ARTIFACT_ID = "luisito666/m2-api-rest:${env.BRANCH_NAME}-${env.BUILD_NUMBER}"
    }

    stages {
        stage('Build') {
            steps {
                nodejs('Node15.0.1') {
                    sh '''
                    npm install
                    ng build --prod
                    '''
                }
            }
        }

        // stage('Testing') {
        //     steps {
        //         sh "docker run ${dockerImage.id} python manage.py test"
        //     }
        // }
    }
}
