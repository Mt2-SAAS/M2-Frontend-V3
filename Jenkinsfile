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
                sh '''#!/usr/bin/env sh
                # export PATH=/home/luisito/.nvm/versions/node/v15.0.1/bin:$PATH
                /home/luisito/.nvm/versions/node/v15.0.1/bin/ng build --prod
                '''
            }
        }

        // stage('Testing') {
        //     steps {
        //         sh "docker run ${dockerImage.id} python manage.py test"
        //     }
        // }
    }
}
