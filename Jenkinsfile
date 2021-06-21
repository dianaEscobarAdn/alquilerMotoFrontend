pipeline {
//Donde se va a ejecutar el Pipeline
  agent {
    label 'Slave4_Induccion'
  }

//Opciones específicas de Pipeline dentro del Pipeline
  options {
    	buildDiscarder(logRotator(numToKeepStr: '3'))
 	disableConcurrentBuilds()
  }
//Una sección que define las herramientas “preinstaladas” en Jenkins
  tools {
    jdk 'JDK8_Centos'
    gradle 'Gradle5.0_Centos'
  }
//Aquí comienzan los “items” del Pipeline
  stages{
      stage('Checkout') {
      steps{
        echo "------------>Checkout<------------"
        checkout([
            $class: 'GitSCM',
            branches: [[name: '*/master']],
            doGenerateSubmoduleConfigurations: false,
            extensions: [],
            gitTool: 'Default',
            submoduleCfg: [],
            userRemoteConfigs: [[
            credentialsId: 'GitHub_dianaEscobar',
            url:'https://github.com/dianaEscobarAdn/alquilerMotoFrontend.git'
            ]]
        ])
      }
    }


    stage('NPM Install') {
       steps {
          withEnv(['NPM_CONFIG_LOGLEVEL=warn']) {
              sh 'npm install'
         }
       }
    }
			// stage('Unit Tests') {
			//	steps {
			//			sh 'npm run test'
			//		}
			//	}

    stage('Static Code Analysis'){
		steps{
			echo '------------>Analisis de código estático<------------'
			withSonarQubeEnv('Sonar') {
                     sh "${tool name: 'SonarScanner', type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner -Dproject.settings=sonar-project.properties"
            }
		}
	}
	stage('Build') {
            steps {
                sh 'ng build --prod --progress=false'
            }
        }
  }
  post {
    always {
      echo 'This will always run'
    }
    success {
      echo 'This will run only if successful'
	    mail (to: 'diana.escobar@ceiba.com.co',subject: "Success Pipeline:${currentBuild.fullDisplayName}",body: "Success build ${env.BUILD_URL}")
    }
    failure {
      echo 'This will run only if failed'
		  mail (to: 'diana.escobar@ceiba.com.co',subject: "Failed Pipeline:${currentBuild.fullDisplayName}",body: "Something is wrong with ${env.BUILD_URL}")
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