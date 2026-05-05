node {
    def app
    stage('Clone repository') {
        git 'https://github.com/Hanharam/advanced-web-programming-server.git'
    }
    stage('Build image') {
        app = docker.build("hanharam/test")
    }
    stage('Test image') {
        app.inside {
            sh 'make test'
        }
    }
    stage('Push image') {
        docker.withRegistry('', 'dockerhub') {
           app.push("${env.BUILD_NUMBER}")
           app.push("latest")
        }
    }
}
