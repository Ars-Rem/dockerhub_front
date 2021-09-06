pipeline {
    agent any
    stages {
        stage('build-front') {
            steps {
                sh "sudo su"
                sh "npm install"
                sh "npm install nginx"
                sh "npm install nodejs"
                sh "npm run build"
                //sh "ssh test2@192.168.3.233 mkdir -p /var/www/example.com/html/"
                //sh "ssh test2@192.168.3.233 sudo chmod 777 /var/www/example.com/html"
                //sh "rsync --archive /var/lib/jenkins/workspace/front_test_main/build/* test2@192.168.3.233:/var/www/example.com/html"
                sh "rsync --archive /var/lib/jenkins/workspace/front_test_main/build/* test2@192.168.3.233:/var/www/html"
                sh "ssh test2@192.168.3.233 sudo npm install serve"
                
            }
        }

        

        
    } 
}

