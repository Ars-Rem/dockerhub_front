pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
 //               sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
            }
        }

        stage('docker-build-front') {
            steps {
                sh "sudo chmod 666 /var/run/docker.sock"
                sh "docker build -t ars18/docker_front:front_c ."
            }
        }

        stage('docker-run-front') {
            steps {
                script {
                    sh "echo {{.Name}}"
                    if ("{{.Name}}" == "front")  {      
                sh "docker stop front"
                sh "docker rm front"
                    }
                    else {
                sh "docker run -d --name front ars18/docker_front:front_c"
                }
            }
        }
        }
        stage('docker-push-front') {
            steps {
                sh "docker commit front ars18/docker_front:front_c"
                sh "docker login -u ${NAME} -p ${PASS} docker.io"
                sh "docker push ars18/docker_front:front_c"
                }                
            }
        }
}

    

