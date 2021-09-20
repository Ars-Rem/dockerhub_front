pipeline {
    agent any
    stages {
        /*stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm run build"
 //               sh "rsync --archive build/* test2@192.168.3.233:/var/www/html"
            }
        }*/

        stage('docker-f') {
            steps {
                sh "sudo chmod 666 /var/run/docker.sock"
                
                sh "docker build -t ars18/docker_front:front_c ."
                sh "docker stop front"
                sh "docker rm front"
                sh "docker run -d --name front ars18/docker_front:front_c"
                //sh "docker commit docker_front ars18/docker_front:front_c"
                sh "docker commit front ars18/docker_front:front_c"
                sh "docker login"
                sh "docker push ars18/docker_front:front_c"
                
                //sh "docker tag 351d8b2ddb8f  ars18/docker_front:v1"
                //sh "docker push ars18/docker_front:v1"
                
                }
            }
        } 
    }


