pipeline {
    agent any
    options {
        buildDiscarder(logRotator(numToKeepStr:'3'))
        timeout(time: 30, unit: 'MINUTES')
        ansiColor('gnome-terminal')
    }
    
         stage ('Build -  dev & deploy') {
            when {
                branch 'main'
            }
             steps {
                 sh 'echo develop'
                 sh "npm install"
                 sh "npm run build"
             }
         }   
         stage ('Build - stage') {
            when {
                branch 'stage'
            }
             steps {
                 sh 'echo ok'
             }
         }
         stage ('Build - prod && deploy') {
            when {
                branch 'main'
            }
             steps {
                 sh "npm install"
                 sh "npm run build"
                 sh "rsync --archive /var/lib/jenkins/workspace/test/build/* test2@192.168.3.233:/var/www/html/"  
             }
         }
         stage ('Recycle') {
             steps {
                 sh 'rm -rf *'
            }
         }
    }
}
