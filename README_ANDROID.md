# A.E.S.T. Taounate — Android APK

Projet Android prêt pour Android Studio. L'interface HTML/CSS/JavaScript est embarquée dans l'APK et fonctionne hors ligne.

## Compilation Android Studio
1. Décompresser le ZIP.
2. Ouvrir le dossier `AEST_Android` dans Android Studio.
3. Laisser Android Studio télécharger/configurer Gradle et le SDK si demandé.
4. `Build > Build APK(s)`.
5. APK : `app/build/outputs/apk/debug/app-debug.apk`.

## Compilation automatique GitHub
Le dossier `.github/workflows/build-apk.yml` compile automatiquement un APK Debug. Dans GitHub : Actions > Build AEST APK > Run workflow. L'APK sera disponible comme Artifact.
