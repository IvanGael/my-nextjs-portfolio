import Article from "../ArticlesComponent/Article";
import ArticleComponent from "../ArticlesComponent/ArticleComponent";

const articlesData: Article[] = [
    {
        id: 1,
        title: 'Installer Sonarqube en local avec Docker',
        description: 'Installer Sonarqube en local avec Docker et utiliser Sonarqube pour analyser un projet NextJs',
        image: '/assets/sonarqube.jpg',
        creationDate: '12 Décembre 2023',
        steps: [
            {
                id: 'step1',
                title: "Etape 1 : Téléchargez l'image Docker SonarQube",
                command: 'docker pull sonarqube'
            },
            {
                id: 'step2',
                title: "Etape 2 : Exécutez SonarQube avec Docker",
                command: 'docker run -d --name sonarqube -p 9000:9000 -p 9092:9092 sonarqube'
            },
            {
                id: 'step3',
                title: "Etape 3 : Assurez-vous que le conteneur est en cours d'exécution",
                command: 'docker ps'
            },
            {
                id: 'step4',
                title: "Etape 4 : Vous pouvez accéder à l'interface web de SonarQube à l'adresse http://localhost:9000 (utilisez le nom d'utilisateur et le mot de passe par défaut : admin/admin).",
                command: ''
            },
            {
                id: 'step5',
                title: "Etape 5 : Installer SonarScanner dans votre projet",
                command: 'npm install -D sonarqube-scanner'
            },
            {
                id: 'step6',
                title: "Etape 6 : Générer un jeton d'accès SonarQube : Connectez-vous à l'interface web de SonarQube - Accédez à 'My Account' > 'Security' > 'Tokens' - Générez un nouveau jeton en lui donnant les autorisations nécessaires.",
                command: ''
            },
            {
                id: 'step7',
                title: "Etape 7 : Créer un fichier sonar-project.properties à la racine de votre projet",
                command: 'sonar.projectKey=my-project-key sonar.projectName=My Project sonar.projectVersion=1.0 sonar.sources=. sonar.token=<votre_jeton>'
            },
            {
                id: 'step8',
                title: "Etape 8 : Exécutez SonarScanner dans le répertoire de votre projet",
                command: 'npx sonarqube-scanner'
            },
            {
                id: 'step9',
                title: "Etape 9 : Rechargez l'interface web de SonarQube (http://localhost:9000) pour voir les résultats de l'analyse.",
                command: ''
            }
        ]
    },
    {
        id: 2,
        title: 'Déployer une application sur Google Cloud Platform',
        description: 'Déployer une application web NextJS/Firebase sur Google Cloud Platform',
        image: '/assets/gcp.jpg',
        creationDate: '12 Décembre 2023',
        steps: [
            {
                id: 'step1',
                title: "Etape 1 : Connectez-vous à votre console Google Cloud Platform",
                command: ''
            },
            {
                id: 'step2',
                title: "Etape 2 : Sélectionner votre projet firebase. Normalement il est automatiquement répertorié dans vos projets GCP",
                command: ''
            },
            {
                id: 'step3',
                title: "Etape 3 : Ensuite dans la barre de recherche, rechercher AppEngine",
                command: ''
            },
            {
                id: 'step4',
                title: "Etape 4 : Cliquer sur le bouton 'Activate cloud shell' pour accéder au cloud shell",
                command: ''
            },
            {
                id: 'step5',
                title: "Etape 5 : Vous devez avoir pushé le code de votre projet NextJs sur github",
                command: ''
            },
            {
                id: 'step6',
                title: "Etape 6 : Avant de pusher le projet sur Git, créer un fichier app.yaml à la racine de votre projet",
                command: ''
            },
            {
                id: 'step7',
                title: "Etape 7 : Télécharger le contenu du fichier app.yaml à l'adresse :",
                command: "https://drive.google.com/file/d/1OscOphHgIXO01DEH1YXB1z9pZUimb18a/view?usp=sharing"
            },
            {
                id: 'step8',
                title: "Etape 8 : Depuis le cloud shell, cloner votre projet Nextjs depuis github",
                command: 'git clone <URL_DU_DEPOT_GIT>'
            },
            {
                id: 'step9',
                title: "Etape 9 : Entrer dans le dossier du projet",
                command: 'cd <NOM_DU_DOSSIER>'
            },
            {
                id: 'step10',
                title: "Etape 10 : Initialiser les dépendences du projet",
                command: 'npm install'
            },
            {
                id: 'step11',
                title: "Etape 11 : Builder le projet",
                command: 'npm run build'
            },
            {
                id: 'step12',
                title: "Etape 12 : Exporter le projet",
                command: 'npm run export'
            },
            {
                id: 'step13',
                title: "Etape 13 : Seul le dossier 'out' généré et le fichier app.yaml seront pris en compte lors du déploiement. Vous pouvez donc vous débarasser des fichiers et dossiers inutiles",
                command: 'rm -r <Nom_DU_DOSSIER .... rm <NOM_DU_FICHIER>'
            },
            {
                id: 'step14',
                title: "Etape 14 : Lancer le déploiement",
                command: 'gcloud app deploy'
            },
            {
                id: 'step15',
                title: "Etape 15 : Vous obtiendrez une url généré pour votre app",
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
