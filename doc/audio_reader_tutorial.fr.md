# Audio Reader for my Friends - Tutoriel Complet

## Introduction

**Audio Reader for my Friends** est un lecteur audio web léger et complet, conçu pour l'étude détaillée de l'audio, la pratique et une lecture fluide. Que vous appreniez une langue, pratiquiez un instrument de musique ou écoutiez simplement des podcasts, cette application offre des outils de précision pour vous aider à interagir avec votre audio.

Les fonctionnalités principales incluent le bouclage de précision A-B, des banques de mémoire personnalisables pour vos boucles préférées, et la possibilité de superposer des pistes "suiveuses" (follower tracks) synchronisées sur votre audio principal. Il prend en charge les fichiers locaux hors ligne, s'intègre parfaitement à Google Drive et enregistre automatiquement votre session afin que vous ne perdiez jamais votre progression.

## Fonctionnalités de Base

### 1. Charger des Fichiers Audio

* **Fichiers Locaux :** Cliquez sur le bouton **Add Local Files** (Ajouter des fichiers locaux) dans l'en-tête en haut à droite pour sélectionner des fichiers `.mp3`, `.wav` ou `.ogg` depuis votre appareil.

* **Glisser-Déposer :** Glissez un ou plusieurs fichiers audio depuis votre ordinateur et déposez-les n'importe où sur la fenêtre du lecteur.

* **Google Drive (Mode Apps Script) :** Si l'application s'exécute dans un environnement Google Apps Script, cliquez sur le bouton **Drive** pour parcourir les dossiers ou effectuer une recherche globale dans votre Google Drive afin d'ajouter des fichiers audio directement.

### 2. Contrôles de Lecture de Base

* **Lecture / Pause :** Cliquez sur le grand bouton circulaire bleu **Play/Pause** au centre, ou appuyez sur la barre `Espace`.

* **Recherche et Défilement :** Cliquez n'importe où sur la **Forme d'onde (Waveform)** ou sur la **Barre de progression** horizontale pour sauter directement à cet instant.

* **Saut et Retour rapide :**

  * Utilisez les boutons **-5s** et **+5s** (ou les touches fléchées `Gauche` / `Droite`) pour reculer ou avancer de 5 secondes.

  * Cliquez sur le bouton **Précédent (Previous)** (ou appuyez sur la `Flèche Haut`) pour sauter au début de la piste (ou au point de boucle `A` s'il est actif).

  * Cliquez sur le bouton **Suivant (Next)** (ou appuyez sur `PageDown`/`Page Suivante`) pour passer à la piste activée suivante.

* **Volume et Vitesse :**

  * Ajustez le curseur de **Volume** en bas à droite.

  * Ajustez le curseur de **Vitesse (Speed)** en bas à gauche (`0.25x` à `1.5x`). La préservation de la hauteur (pitch) est automatiquement activée pour que les voix et les instruments restent justes. Cliquez sur l'affichage de la vitesse (ex. `1.0x`) pour la réinitialiser instantanément à la vitesse normale.

* **Modes de Répétition :**

  * **Répéter la Piste (Repeat Track) :** Cliquez sur l'icône de flèche circulaire à gauche des contrôles de lecture pour boucler la piste actuelle en entier.

  * **Enchaîner les Pistes et Répéter la Liste de Lecture :** Dans l'en-tête de la Playlist, cochez **Chain Tracks** pour lire automatiquement la piste suivante lorsqu'une piste se termine, et cliquez sur la petite icône de répétition à côté pour boucler la liste de lecture entière.

## Fonctionnalités Intermédiaires

### 3. Gestion de la Liste de Lecture (Playlist)

* **Lire et Activer/Désactiver des Pistes :** Cliquez sur le nom d'une piste dans la playlist pour la lire immédiatement. Décochez la case à côté d'une piste pour la désactiver/l'ignorer lors de la lecture continue.

* **Réorganiser et Supprimer :** Glissez-déposez les éléments de la playlist verticalement pour les réorganiser, ou survolez une piste pour utiliser les boutons **Haut (Up)**, **Bas (Down)** et **Supprimer (`X`)**.

* **Recherche :** Tapez dans la barre **Search tracks...** pour filtrer les longues listes de lecture en temps réel.

* **Sauvegarder, Charger, Exporter et Importer :** Cliquez sur le bouton **Playlists** dans l'en-tête pour ouvrir le gestionnaire :

  * **Sauvegarder / Charger (Save / Load) :** Sauvegardez votre liste de pistes actuelle (y compris les points de boucle A-B individuels de chaque piste) dans le stockage du navigateur pour la rappeler plus tard.

  * **Exporter / Importer (Export / Import) :** Cliquez sur **Export** pour regrouper vos fichiers audio et vos paramètres de boucle dans un seul fichier `.json` qui peut être partagé avec des amis et chargé via **Import**.

### 4. Bouclage de Précision A-B

* **Définir les Points de Boucle :**

  * **Cliquer-Glisser :** Cliquez et glissez sur la **Forme d'onde** ou la **Barre de progression** pour mettre en évidence une région spécifique.

  * **Boutons à la volée :** Cliquez sur le bouton **A** (ou appuyez sur `A`) pendant l'écoute pour marquer le point de départ, et cliquez sur **B** (ou appuyez sur `B`) pour marquer le point de fin.

  * **Double Curseur :** Faites glisser les indicateurs circulaires bleu **A** et orange **B** directement sur la barre de progression.

* **Ajustement Fin et Saisie Manuelle :**

  * Cliquez sur les boutons de décalage **+0.1** ou **-0.1** à côté de A ou B pour déplacer les limites d'un dixième de seconde.

  * Cliquez directement dans les cases de temps `A` ou `B` pour taper un temps exact (ex. `1:24.5`) et appuyez sur `Entrée`.

* **Comportement de la Boucle :**

  * **Répéter la Sélection (Repeat Selection) :** Laissez coché pour boucler continuellement entre A et B. Décochez pour lire jusqu'à B une fois puis s'arrêter (ou passer à la piste suivante si *Chain Tracks* est activé).

  * **Intervalle de Pause :** Utilisez le menu déroulant **Pause** (`0s`, `1s`, `2s`, `5s`) pour insérer un silence entre les répétitions de la boucle — utile pour le "shadowing" dans l'apprentissage des langues ou la pratique de phrases musicales.

  * Cliquez sur **Clear (Effacer)** pour supprimer la sélection A-B.

## Fonctionnalités Avancées

### 5. Banques de Mémoire de Boucles et Épinglage Global

Les trois LED circulaires dans le panneau de contrôle A-B vous permettent de stocker jusqu'à trois préréglages de boucles A-B par piste (ou globalement) :

* **Sauvegarder dans une Banque :** Définissez votre boucle A-B souhaitée, puis **appuyez et maintenez** l'un des trois boutons LED pendant 0,6 seconde (ou appuyez sur `Maj + 1`, `Maj + 2` ou `Maj + 3`). La LED clignotera en blanc et deviendra violette fixe.

* **Rappeler une Boucle :** **Appuyez brièvement** sur une LED allumée (ou appuyez sur `1`, `2` ou `3`) pour sauter immédiatement et charger cette boucle A-B sauvegardée.

* **Épinglage Global (Global Pinning) :** **Appuyez deux fois** (ou double-cliquez) sur n'importe quelle LED pour l'épingler. Les LED épinglées deviennent **orange (ambre)** et persistent sur *toutes* les pistes de votre playlist plutôt que d'être liées à un seul fichier audio. Appuyez de nouveau deux fois pour la désépingler et revenir à la mémoire spécifique de la piste.

### 6. Pistes Suiveuses Synchronisées (Lecture Multi-pistes)

Vous pouvez superposer plusieurs pistes audio (telles que des pistes isolées, des pistes d'accompagnement ou des voix off traduites) afin qu'elles soient lues en stricte synchronisation avec votre piste principale :

1. Chargez votre piste principale et lancez la lecture (ou laissez-la en pause à votre point de départ).

2. Dans la **Playlist**, survolez une piste secondaire et cliquez sur **l'icône de Maillon/Chaîne** (*"Add as synchronously playing follower track"* / Ajouter comme piste suiveuse synchronisée).

3. Un panneau **Synchronized Follower Tracks** apparaîtra au-dessus de la playlist.

4. **Mixage Indépendant et Synchronisation Automatique :** Chaque piste suiveuse dispose de son propre curseur de **Volume** pour que vous puissiez équilibrer les niveaux indépendamment. Chaque fois que vous lisez, mettez en pause, parcourez, bouclez ou modifiez la vitesse de lecture sur la piste principale, toutes les pistes suiveuses restent automatiquement verrouillées dans le temps (avec une correction de dérive intégrée si les mémoires tampons se désynchronisent).

### 7. Restauration Automatique de la Session

L'ordre de votre playlist, la piste active, l'horodatage de lecture actuel, le volume, la vitesse de lecture et les points de boucle A-B sont automatiquement sauvegardés dans la base de données locale de votre navigateur (`IndexedDB` et `localStorage`). Vous pouvez ainsi fermer l'onglet et reprendre exactement là où vous vous étiez arrêté.

## Référence des Raccourcis Clavier

| Touche | Action | 
| ----- | ----- | 
| `Espace` | Lecture / Pause | 
| Flèche `Gauche` / `Droite` | Reculer de 5s / Avancer de 5s | 
| Flèche `Haut` / `Bas` | Sauter au début (ou au point A) / Sauter à la fin | 
| `PageHaut` / `PageBas` | Piste précédente / Piste suivante | 
| `A` / `B` | Définir le début de la boucle (A) / Définir la fin de la boucle (B) | 
| `1`, `2`, `3` | Charger la banque de mémoire de boucle 1, 2 ou 3 | 
| `Maj` + `1`, `2`, `3` | Sauvegarder la boucle A-B actuelle dans la Banque 1, 2 ou 3 | 