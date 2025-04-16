/* test */
const projects = [
    {
      title: "Yueii - Jeu en Python",
      description:
        "Créer un jeu en Python, où le joueur incarne un élève dans un lycée de héros. L’objectif est d’explorer différents lieux, d’interagir avec des personnages, de combattre un mannequin d’entraînement et de collecter des objets pour progresser.",
      missions:
        "Création du scénario, développement en Python, logique de combat, test utilisateur.",
      duree: "2 semaines",
      outils: "Python, VS Code",
      lecon: `
    <a href="https://github.com/esiee-it-slam-2025/aboudi_reda/tree/e1a8028c51bbaaa7456a92a2b28351674456a8f7/TP%20Yuei" 
       target="_blank" 
       style="color: #0066cc; text-decoration: underline;">
      🔗 Voir le code du projet sur GitHub
    </a>`,
      etapes: ["Analyse des besoins", "Développement de l'application", "Test et amélioration"],
      competences: [
        {
            titre: "Analyser les objectifs et les modalités d’organisation d’un projet",
            contenu: `
              J’ai listé tous les lieux, objets, combats et interactions dans un mini cahier des charges avant de coder.
              <br><br>
              <button onclick="togglePdf(this)">📄 Voir le cahier des charges</button>
              <div class="pdf-wrapper" style="display:none; margin-top: 10px;">
                <iframe src="docs/Cahier-des-charges-Yueii.pdf" width="100%" height="300px" style="border: 1px solid #ccc; border-radius: 8px;"></iframe>
              </div>
            `
          },                   
          {
            titre: "Planifier les activités",
            contenu: `
              J’ai découpé les grandes étapes du jeu (combat, déplacement, dialogue, logique, tests...) pour les développer les unes après les autres. Pour organiser mon avancement, j’ai utilisé un tableau Trello avec plusieurs colonnes ("À faire", "En cours", "Bloqué", "Terminé") et fixé des dates limites pour chaque tâche.
              <br><br>
              <img src="docs/trelloYueii.png" alt="Trello projet Yueii" class="zoom-img" style="max-width:100%; border:1px solid #ccc; border-radius:8px; margin-bottom:10px; cursor: zoom-in;">
              <br>
              Chaque carte représente une fonctionnalité ou une tâche précise, me permettant de visualiser rapidement ce qu’il restait à faire. Le fait d'avoir tout planifié m'a permis d’avancer de manière fluide et de respecter mes objectifs.
            `
          },                            
          {
            titre: "Mettre en place son environnement d’apprentissage personnel",
            contenu: `
              J’ai utilisé Visual Studio Code avec le terminal intégré pour coder et tester le jeu en direct. J’ai aussi corrigé les erreurs au fur et à mesure en relançant fréquemment le script. Cela m’a permis de mieux comprendre Python.
              <br><br>
              <p style="margin-bottom: 10px;"><strong>🎥 Vidéo de démonstration :</strong> un aperçu du jeu en fonctionnement.</p>
              <video controls style="width: 100%; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                <source src="docs/yueiivideo.mp4" type="video/mp4">
              </video>
            `}                   
      ]
    },
    {
      title: "JoTickets - Billetterie Olympique",
      description:
        "Développement d’un système de billetterie avec API, interface d’administration Django et deux applications front : achat de billets et scan QR Code.",
      missions:
        "Connexion API, gestion base de données, création des vues Django, implémentation de QR codes, sécurisation des accès.",
      duree: "3 mois",
      outils: "Django, Python, HTML, JS, QR Scanner, VS Code",
      lecon:`
      <a href="https://github.com/esiee-it-slam-2025/aboudi_reda/tree/348769cf31007bc0bf9964b883afd64626b31904/TP%20PROJET%20JO" 
         target="_blank" 
         style="color: #0066cc; text-decoration: underline;">
        🔗 Voir le code du projet sur GitHub
      </a>`,
      etapes: ["Développement de l'API", "Création des interfaces front", "Déploiement et test"],
      competences: [
        {
            titre: "Recenser et identifier les ressources numériques",
            contenu: `
              Pour démarrer le projet, j’ai listé tous les outils nécessaires :
              <ul style="margin-top: 8px;">
                <li><b>Django</b> pour l’API et l’administration</li>
                <li><b>SQLite</b> pour la base de données</li>
                <li><b>Django REST Framework</b> pour exposer les endpoints</li>
                <li><b>QR Scanner JS</b> pour lire les billets</li>
              </ul>
              <br>
              📌 Voici un aperçu de ma base de données :
              <div class="image-grid">
                <img src="docs/BDDJO.png" alt="Schéma BDD JoTickets" class="zoom-img" />
                <img src="docs/JOSTADIUM.png" alt="Table team" class="zoom-img" />
              </div>
            `
          },                           
          {
            titre: "Mettre en place et vérifier les niveaux d’habilitation associés à un service",
            contenu: `
              Pour sécuriser l’accès à certaines fonctionnalités, j’ai mis en place deux vérifications dans le back-end Django :
              <ul style="margin-top: 8px;">
                <li><b>1. Vérification de connexion</b> : une vue <code>check_auth</code> renvoie si un utilisateur est connecté ou non. Cela permet de contrôler l’affichage côté front et l'accès aux données.</li>
                <li><b>2. Vérification d’accès aux objets</b> : dans certaines vues, l’utilisateur ne peut interagir qu’avec ses propres données, grâce au filtre <code>user=request.user</code>.</li>
              </ul>
              <br>
              🔐 Voici les extraits de code :
              <div class="image-grid">
                <img src="docs/check_auth.png" alt="Vérification de connexion dans Django" class="zoom-img" />
                <img src="docs/request.user.png" alt="Restriction des objets à l'utilisateur courant" class="zoom-img" />
              </div>
            `
          },          
          {
            titre: "Planifier les activités",
            contenu: `
              Pour mener à bien le développement de JoTickets, j’ai découpé le projet en plusieurs modules :
              interface d’administration, API, interface d’achat de billets, et scan de QR code.
          
              <br><br>
              J’ai utilisé Trello pour organiser les tâches à réaliser, suivre leur avancement et les prioriser.
              Cela m’a permis de mieux répartir les étapes dans le temps, de visualiser mes objectifs, et de résoudre les blocages au fur et à mesure.
              
              <br><br>
              <img src="docs/planning-jotickets.jpg" alt="Trello JO" class="zoom-img trello-jotickets-img" style="max-width:100%; border-radius:8px; border:1px solid #ccc; cursor: zoom-in;">
            `
          }
      ]
    },
    {
      title: "GestEPI - Gestion des Équipements de Protection Individuelle",
      description:
        "Application de suivi des équipements de sécurité (EPI) pour cordistes : ajout, contrôles, alertes de maintenance, détails et historique.",
      missions:
        "Développement back-end Express/TS, front React/MUI, structuration des interfaces types, alerte de maintenance.",
      duree: "3 mois",
      outils: "React, TypeScript, Express, MariaDB, VS Code",
      lecon:`
      <a href="https://github.com/Reda951/GestEPI.git" 
         target="_blank" 
         style="color: #0066cc; text-decoration: underline;">
        🔗 Voir le code du projet sur GitHub
      </a>`,
      etapes: ["Architecture du projet", "Développement Front/Back", "Mise en place des alertes"],
      competences: [
        {
          titre: "Recenser et identifier les ressources numériques",
          contenu: `
            <p style="margin-bottom: 16px;">
              🔍 Pour répondre à cette compétence, j’ai modélisé les ressources clés de l’application (EPI, Contrôle, Utilisateur) avec Sequelize.
            </p>
        
            <div class="code-exp-grid">
              <div class="code-block">
                <pre><code class="language-javascript">
        const EPI = sequelize.define('EPI', {
          id: { type: DataTypes.UUID, primaryKey: true },
          numeroSerie: DataTypes.STRING,
          type: DataTypes.ENUM('TEXTILE', 'METAL'),
          statut: DataTypes.ENUM('OPERATIONNEL', 'REPARATION', 'REBUT'),
          dateAchat: DataTypes.DATEONLY,
          periodiciteControle: DataTypes.INTEGER
        });
                </code></pre>
              </div>
              <div class="explication">
                🧩 <strong>Modèle EPI :</strong> Ce modèle décrit les équipements à suivre : numéro de série, type (textile ou métal), statut, dates clés et fréquence de contrôle.
              </div>
            </div>
        
            <div class="code-exp-grid">
              <div class="code-block">
                <pre><code class="language-javascript">
        const ControleModel = sequelize.define('Controle', {
          id: { type: DataTypes.STRING, primaryKey: true },
          date: DataTypes.STRING,
          gestionnaire: DataTypes.STRING,
          statut: DataTypes.STRING,
          remarques: DataTypes.STRING,
        });
        ControleModel.belongsTo(EPIModel, { foreignKey: 'epiId' });
                </code></pre>
              </div>
              <div class="explication">
                🧩 <strong>Modèle Contrôle :</strong> Chaque contrôle est lié à un EPI et stocke les infos : date, statut, remarques, gestionnaire.
              </div>
            </div>
        
            <div class="code-exp-grid">
              <div class="code-block">
                <pre><code class="language-javascript">
        const User = sequelize.define('User', {
          id: { type: DataTypes.UUID, primaryKey: true },
          nom: DataTypes.STRING,
          email: DataTypes.STRING,
          role: DataTypes.ENUM('admin', 'gestionnaire')
        });
                </code></pre>
              </div>
              <div class="explication">
                🧩 <strong>Modèle Utilisateur :</strong> Gère les rôles d’utilisateur (admin/gestionnaire) et permet d’associer les actions à un utilisateur identifié.
              </div>
            </div>
          `
        },                                   
        {
          titre: "Planifier les activités",
          contenu: `
            J’ai découpé mon travail en plusieurs lots : création de la base de données, développement de l’API, puis développement du front avec alertes. Cette organisation m’a permis d’avoir une vue claire du projet à chaque étape.
            
            <br><br>
            📦 <strong>Architecture de l’application GestEPI :</strong>
            <br><br>
            <img src="docs/ArchitectureGestEPI.png" alt="Architecture application GestEPI" class="zoom-img" style="max-width:100%; border-radius:8px; border:1px solid #ccc;">
        
            <br><br>
            📋 <strong>Suivi des tâches avec Trello :</strong>
            <br><br>
            <img src="docs/trellogestepi.png" alt="Trello GestEPI" class="zoom-img" style="max-width:100%; border-radius:8px; border:1px solid #ccc;">
          `
        },
        {
          titre: "Développer son projet professionnel",
          contenu: `
            Ce projet m’a permis de travailler en autonomie complète sur la durée, en allant du back-end à l’interface React. J’ai documenté mes choix, mon organisation et mes apprentissages dans un fichier personnel que voici :
            <br><br>
            <button class="readme-btn" onclick="openReadmePopup()">📄 Lire le README personnel</button>
          `
        }
      ]
    },
    {
      title: "Billetterie métro Fukuoka",
      description:
        "Système de calcul de tarif de billets en ligne de métro avec distances, zones tarifaires et gestion des tarifs réduits.",
      missions:
        "Interaction utilisateur en ligne de commande, gestion des erreurs, logique tarifaire, affichage de l’itinéraire.",
      duree: "2 semaines",
      outils: "Python, Terminal",
      lecon:`
      <a href="https://github.com/esiee-it-slam-2025/aboudi_reda/tree/a9f3fef78c68f63187640350650af01359ceec65/TP%20GARE" 
         target="_blank" 
         style="color: #0066cc; text-decoration: underline;">
        🔗 Voir le code du projet sur GitHub
      </a>`,
      etapes: ["Création des règles de tarification", "Développement du terminal", "Test du script"],
      competences: [
        {
          titre: "Analyser les objectifs et les modalités d’organisation d’un projet",
          contenu: `
            Pour ce projet, j’ai commencé par définir les besoins utilisateurs : calcul du tarif d’un trajet en métro selon les stations de départ et d’arrivée, avec ou sans tarif réduit.
            <br><br>
            J’ai rédigé un mini cahier des charges pour identifier :
            <ul>
              <li>les zones (A, B, C)</li>
              <li>les règles tarifaires simples</li>
              <li>les réductions à appliquer</li>
            </ul>
        
            <br><strong>🎯 Objectif :</strong> permettre un calcul rapide, juste, et simple à lire pour l’utilisateur final.
        
            <br><br><strong>🗺️ Carte utilisée :</strong>
            <div class="image-grid">
              <img src="docs/fukuokamap.png" alt="Plan métro Fukuoka" class="zoom-img" />
            </div>
        
            <br><br>j’ai rédigé un cahier des charges regroupant les règles tarifaires, les zones.
            <div style="text-align: center;">
              <button class="readme-btn" onclick="openChargeFukuoka()">📄 Voir le cahier des charges</button>
            </div>
          `
        },
        {
          titre: "Planifier les activités",
          contenu: `
            J’ai organisé le projet en plusieurs tâches via Trello : rédaction du cahier des charges, gestion des cas utilisateurs, codage, et tests.
            <br><br>
            Chaque carte correspond à une action concrète à faire ou déjà réalisée, répartie dans des colonnes "À faire", "En cours", "Bloqué" ou "Terminé".
            <br><br>
            Cela m’a permis de garder une vue d’ensemble claire sur l’avancement et de prioriser les étapes importantes.
            <br><br>
            <div style="text-align: center;">
              <img src="docs/trellofukuoka.png" alt="Trello Fukuoka" class="zoom-img" style="max-width:90%; border-radius:8px; border:1px solid #ccc; cursor: zoom-in;">
            </div>
          `
        },
        {
          titre: "Gérer son identité professionnelle",
          contenu: `
            Ce projet m’a permis de mener un test utilisateur simple pour valider la logique du code. 
            <br><br>
            🎥 Voici une démonstration vidéo du script Python en exécution :
            <br><br>
            <video controls style="width: 100%; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
              <source src="docs/test-testpython.mp4" type="video/mp4">
              Votre navigateur ne prend pas en charge la vidéo.
            </video>
            <br><br>
            Cette vidéo montre les différentes étapes du script : choix des billets, stations, calculs automatiques et affichage final.
            <br><br>
            ✅ Cette démarche m’a permis de :
            <ul>
              <li>🧠 Vérifier concrètement le bon fonctionnement du projet</li>
              <li>💬 Expliquer mon code à l’oral, comme en entreprise</li>
              <li>👤 Valoriser mon travail en le documentant clairement</li>
            </ul>
            <br>
            C’est une façon concrète de montrer mon autonomie, mon sérieux, et ma capacité à tester et présenter un projet proprement.
          `
        }
      ]
    },
    {
      title: "Gestion communication client par mail",
      description:
        "Réception et traitement des mails clients pour des demandes de projet. Transmission au responsable, rédaction de réponses, relance ou orientation.",
      missions:
        "Réponse aux mails, qualification des besoins, suivi de dossiers avec le responsable.",
      duree: "2 ans (ponctuel durant l'alternance)",
      outils: "Outlook, messagerie professionnelle",
      lecon:
        "Meilleure compréhension de la communication client et suivi de demandes techniques.",
      etapes: ["Lecture des demandes", "Transmission aux décideurs", "Réponse ou relance"],
      competences: [
        {
          titre: "Collecter, suivre et orienter des demandes",
          contenu: `
            Cette conversation client illustre le processus complet de gestion des demandes :
            <ul>
              <li>Réception des besoins spécifiques (page "Réalisations", bouton WhatsApp)</li>
              <li>Analyse rapide de la faisabilité technique avec proposition de solutions concrètes</li>
              <li>Transmission aux décideurs pour validation et estimation</li>
              <li>Communication régulière pour maintenir le client informé des étapes</li>
              <li>Finalisation avec confirmation de prise en charge et planification</li>
            </ul>
            <br>
            <div style="text-align: center; margin: 15px 0;">
              <img src="docs/Whatsappdiscut.png" alt="Whatsapp discussion" class="zoom-img" style="max-width:100%; border:1px solid #ccc; border-radius:8px; margin-bottom:10px; cursor: zoom-in;">
            </div>
            <br>
            Ce flux de communication montre l'importance d'être l'interface efficace entre les attentes des clients et les possibilités techniques de l'équipe, tout en maintenant une relation de confiance par des retours réguliers.
          `
        },
        {
          titre: "Traiter des demandes concernant les services réseau et système, applicatifs",
          contenu: `
            Un client m'a envoyé un message WhatsApp pour demander une petite amélioration sur son site vitrine. Il voulait qu'on ajoute un bouton pour que ses clients puissent télécharger directement son catalogue PDF.
            
            <p style="margin: 10px 0;">J'ai lu sa demande et je l'ai transmise à mon responsable pour voir si c'était faisable. On en a discuté rapidement avec l'équipe, et on a validé l'idée parce que c'était simple à mettre en place.</p>
            
            <p style="margin: 10px 0;">J'ai ensuite recontacté le client pour lui dire qu'on pouvait s'en occuper dans la semaine, et je lui ai demandé de m'envoyer le fichier à intégrer. Une fois le fichier reçu, j'ai intégré le bouton sur la page d'accueil du site et j'ai testé que le lien fonctionnait bien.</p>
            
            <p style="margin-bottom: 15px;">J'ai enfin envoyé une confirmation au client pour lui montrer le rendu et valider que ça lui convenait.</p>
            
            <div class="code-exp-grid" style="font-size: 0.9em;">
              <div class="code-block" style="padding: 10px; max-height: 280px; overflow-y: auto;">
                <pre style="margin: 0;"><code class="language-html">
        <!-- Ajout du bouton de téléchargement -->
        <div class="download-btn-container">
          <a href="/documents/catalogue-2023.pdf" 
             class="download-btn" 
             download>
            <img src="/images/pdf-icon.png" alt="PDF">
            Télécharger notre catalogue
          </a>
        </div>
        
        <style>
          .download-btn-container {
            text-align: center;
            margin: 25px 0;
          }
          .download-btn {
            display: inline-flex;
            align-items: center;
            background: #e74c3c;
            color: white;
            padding: 12px 20px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            transition: background 0.3s;
          }
          .download-btn:hover {
            background: #c0392b;
          }
          .download-btn img {
            height: 20px;
            margin-right: 10px;
          }
        </style>
                </code></pre>
              </div>
              <div class="explication" style="padding: 10px; font-size: 0.85em;">
                Ce code simple permet d'intégrer un bouton de téléchargement visible et intuitif, avec une icône PDF et un effet de survol pour améliorer l'expérience utilisateur. La structure HTML/CSS est optimisée pour s'intégrer facilement dans la page existante.
              </div>
            </div>
          `
        }
      ]
    },
    {
      title: "Prototypage de pages web pour site de l’entreprise",
      description:
        "Observation du travail des développeurs, tests d’interface, proposition de modifications d’éléments UX/UI intégrés après validation.",
      missions:
        "Tests utilisateurs, maquettes de propositions, retours d’expérience clients, ajustements graphiques.",
      duree: "6 mois (ponctuel)",
      outils: "HTML, CSS, outils de maquettage, navigateur",
      lecon:
        "Approfondissement en accessibilité, ergonomie et accompagnement de l'utilisateur.",
      etapes: ["Test d'interfaces", "Prototypage de nouvelles idées", "Proposition à l’équipe"],
      competences: [
        {
          titre: "Participer à l'évolution d'un site Web exploitant les données de l'organisation.",
          contenu: `
            Dans le cadre de mon alternance, je réalisais des maquettes en réponse aux demandes des clients ou en anticipation de certaines améliorations. Ces maquettes servaient de base de discussion avec l'équipe de développeurs pour valider la faisabilité technique.
            <br><br>
            Une fois validées, on se répartissait les tâches pour transformer la maquette en vraie fonctionnalité sur le site. Cela permettait de proposer des ajouts concrets (comme ici un formulaire de contact), tout en gardant une cohérence visuelle et technique.
            <br><br>
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="docs/maquette.jpg" alt="Maquette de formulaire de contact" class="zoom-img" style="max-width: 30%; border-radius: 8px; border: 1px solid #ccc; cursor: zoom-in;">
            </div>
            
            <h5 style="color: var(--primary-color); margin: 30px 0 20px 0; text-align: center; font-size: 1.2rem;">Avant / Après l'implémentation</h5>
            
            <div style="display: flex; justify-content: space-between; gap: 20px; margin: 20px 0;">
              <div style="flex: 1; position: relative; display: flex; flex-direction: column; justify-content: center;">
                <div style="position: relative; padding-top: 56.25%; width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #333; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                  <img src="docs/avant.png" alt="Site avant ajout du formulaire" class="zoom-img" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; cursor: zoom-in;">
                  <div style="position: absolute; top: 15px; left: 15px; background-color: rgba(0,0,0,0.7); color: white; padding: 7px 15px; border-radius: 4px; font-size: 0.9rem; font-weight: bold; z-index: 2;">Avant</div>
                </div>
              </div>
              
              <div style="flex: 1; position: relative; display: flex; flex-direction: column; justify-content: center;">
                <div style="position: relative; padding-top: 56.25%; width: 100%; overflow: hidden; border-radius: 8px; border: 1px solid #333; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                  <img src="docs/apres.png" alt="Site après ajout du formulaire" class="zoom-img" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; cursor: zoom-in;">
                  <div style="position: absolute; top: 15px; left: 15px; background-color: rgba(0,255,255,0.7); color: black; padding: 7px 15px; border-radius: 4px; font-size: 0.9rem; font-weight: bold; z-index: 2;">Après</div>
                </div>
              </div>
            </div>
          `
        },
        {
          titre: "Réaliser les tests d'intégration et d'acceptation d'un service",
          contenu: `
            Dans le cadre de la mise en ligne d'une nouvelle page "Contact", j'ai été sollicité pour effectuer une série de tests d'intégration. Après réception du message du développeur m'indiquant que l'intégration était terminée, j'ai réalisé plusieurs vérifications :
            <ul style="margin-left: 20px; margin-bottom: 20px;">
              <li>Affichage responsive testé sur mobile et tablette</li>
              <li>Vérifications du rendu sur plusieurs navigateurs : Chrome, Firefox et Edge</li>
              <li>Tests fonctionnels du formulaire de contact (envoi d'un message)</li>
              <li>Contrôle de la console du navigateur pour s'assurer de l'absence d'erreurs JavaScript</li>
              <li>Vérification du bon fonctionnement de l'ensemble des liens de la page</li>
            </ul>
            
            <div style="text-align: center; margin: 20px 0;">
              <img src="docs/discussion.png" alt="Discussion avec le développeur" class="zoom-img" style="max-width: 80%; border-radius: 8px; border: 1px solid #ccc; box-shadow: 0 4px 8px rgba(0,0,0,0.2); cursor: zoom-in;">
            </div>
          `
        }
      ]
    }
  ];
  window.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".projects-grid");
    if (!container) return;
  
    projects.forEach((project, index) => {
      const block = document.createElement("div");
      block.classList.add("project-terminal");
  
      block.innerHTML = `
        <div class="terminal-header">
          <span class="dot red"></span>
          <span class="dot yellow"></span>
          <span class="dot green"></span>
          <span class="terminal-title">${project.title}</span>
        </div>
        <div class="terminal-body">
          <p>${project.description}</p>
          <button class="btn-show-project" onclick="openPopupByIndex(${index})">🧠 Détails du projet</button>
        </div>
      `;
  
      container.appendChild(block);
    });
  });