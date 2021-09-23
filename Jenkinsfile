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
                sh "docker build -t ${NAME}/docker_front:front_c ."
            }
        }

        stage('docker-run-front') {
            steps {
                //sh "docker stop \$(docker ps -a -q)"
                //sh "docker rm \$(docker ps -a -q)"
                //sh "docker rmi -f \$(docker images -a -q)"
                //sh "docker stop front"
                //sh "docker rm front"
                sh "docker run -d --name front -p 80:80 ${NAME}/docker_front:front_c"
                }
            }
        
        
        stage('docker-push-front') {
            steps {
                sh "docker commit front ${NAME}/docker_front:front_c"
                sh "docker login -u ${NAME} -p ${PASS} docker.io"
                sh "docker push ${NAME}/docker_front:front_c"
            }
        }
    }        
}


    

