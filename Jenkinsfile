/* Requires the Docker Pipeline plugin */
pipeline {
    agent { 
        docker { 
            image 'node:22.14.0-alpine3.21' 
            args '-p 3000:3000 -d' 
        } 
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --eval "console.log(process.arch,process.platform)"'
                sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
            }
        }
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                retry(3) {
                    sh 'npm i -g pm2'
                    sh 'pm2 start npm --name "nextjs-app" -- run start'
                }
                timeout(time: 3, unit: 'MINUTES') {
                    sh 'echo "Hello Timeout"'
                }
            }
        }
    }
    post {
        always {
            echo 'This will always run'
            // deleteDir()
        }
        success {
            echo 'This will run only if successful'
            // mail to: 'manojadkc2004@gmail.com',
            //     subject: "Pipeline is successfull",
            //     body: "Samvit fest website is running go to http://localhost:3000"
        }
        failure {
            echo 'This will run only if failed'
        }
        unstable {
            echo 'This will run only if the run was marked as unstable'
        }
        changed {
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }
}
