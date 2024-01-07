import Article from "../ArticlesComponent/Article";
import ArticleComponent from "../ArticlesComponent/ArticleComponent";

const articlesData: Article[] = [
    {
        id: 1,
        title: 'Install Sonarqube locally with Docker',
        description: 'Install Sonarqube locally with Docker and use Sonarqube to analyze a NextJs project',
        image: '/assets/sonarqube.jpg',
        creationDate: '12 Dec 2023',
        steps: [
            {
                id: 'step1',
                title: "Step 1 : Download the SonarQube Docker image",
                command: 'docker pull sonarqube'
            },
            {
                id: 'step2',
                title: "Step 2 : Run SonarQube with Docker",
                command: 'docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube'
            },
            {
                id: 'step3',
                title: "Step 3 : Make sure the container is running",
                command: 'docker ps'
            },
            {
                id: 'step4',
                title: "Step 4 : You can access the SonarQube web interface at http://localhost:9000 (use the default username and password: admin/admin).",
                command: ''
            },
            {
                id: 'step5',
                title: "Step 5 : Install SonarScanner in your project",
                command: 'npm install -D sonarqube-scanner'
            },
            {
                id: 'step6',
                title: "Step 6 : Generate a SonarQube access token: Log in to the SonarQube web interface - Go to 'My Account' > 'Security' > 'Tokens' - Generate a new token by giving it the necessary permissions.",
                command: ''
            },
            {
                id: 'step7',
                title: "Step 7 : Create a sonar-project.properties file in the root of your project",
                command: 'sonar.projectKey=my-project-key sonar.projectName=My Project sonar.projectVersion=1.0 sonar.sources=. sonar.token=<votre_jeton>'
            },
            {
                id: 'step8',
                title: "Step 8 : Run SonarScanner in your project directory",
                command: 'npx sonarqube-scanner'
            },
            {
                id: 'step9',
                title: "Step 9 : Reload the SonarQube web interface (http://localhost:9000) to see the analysis results.",
                command: ''
            }
        ]
    },
    {
        id: 2,
        title: 'Deploy an application on Google Cloud Platform',
        description: 'Deploy a NextJS/Firebase web application on Google Cloud Platform',
        image: '/assets/gcp.jpg',
        creationDate: '12 Dec 2023',
        steps: [
            {
                id: 'step1',
                title: "Step 1 : Log in to your Google Cloud Platform console",
                command: ''
            },
            {
                id: 'step2',
                title: "Step 2 : Select your firebase project. Normally it is automatically listed in your GCP projects",
                command: ''
            },
            {
                id: 'step3',
                title: "Step 3 : Then in the search bar, search for AppEngine",
                command: ''
            },
            {
                id: 'step4',
                title: "Step 4 : Click on the 'Activate cloud shell' button to access the cloud shell",
                command: ''
            },
            {
                id: 'step5',
                title: "Step 5 : You must have pushed the code of your NextJs project to github",
                command: ''
            },
            {
                id: 'step6',
                title: "Step 6 : Before pushing the project to Git, create an app.yaml file at the root of your project",
                command: ''
            },
            {
                id: 'step7',
                title: "Step 7 : Download the contents of the app.yaml file at:",
                command: "https://drive.google.com/file/d/1OscOphHgIXO01DEH1YXB1z9pZUimb18a/view?usp=sharing"
            },
            {
                id: 'step8',
                title: "Step 8 : From the cloud shell, clone your Nextjs project from github",
                command: 'git clone <URL_DU_DEPOT_GIT>'
            },
            {
                id: 'step9',
                title: "Step 9 : Enter project folder",
                command: 'cd <NOM_DU_DOSSIER>'
            },
            {
                id: 'step10',
                title: "Step 10 : Init project dependencies",
                command: 'npm install'
            },
            {
                id: 'step11',
                title: "Step 11 : Build the project",
                command: 'npm run build'
            },
            {
                id: 'step12',
                title: "Step 12 : Export the project",
                command: 'npm run export'
            },
            {
                id: 'step13',
                title: "Step 13 : Only the generated 'out' folder and the app.yaml file will be taken into account during deployment. So you need to get rid of unnecessary files and folders",
                command: 'rm -r <Nom_DU_DOSSIER .... rm <NOM_DU_FICHIER>'
            },
            {
                id: 'step14',
                title: "Step 14 : Start deployment",
                command: 'gcloud app deploy'
            },
            {
                id: 'step15',
                title: "Step 15 : You will get a generated url for your app",
                command: ''
            },
        ]
    },
];


const Articles = () => {
    return (
        <div id="articles-section" className="mx-auto max-w-2xl pb-16 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">

            <div className='sm:flex justify-between items-center mb-12'>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Articles</h2>
            </div>

            <ArticleComponent articles={articlesData} />

        </div>
    )
}

export default Articles;
