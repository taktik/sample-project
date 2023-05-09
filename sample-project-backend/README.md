# sample-project-backend

## Develop in this repo

Configure your IDE to use Gradle on the `sample-project-backend` folder, and also tell Gradle to use a Java 17 JDK, if it's not your default JDK.

Don't forget to enable the EditorConfig plugin for this repo (see .editorconfig).

You should also have a `.gradle/gradle.properties` file with the following content:
```repoUsername=xy_taktik_com
repoPassword=XXX
mavenRepository=https://maven.taktik.be/content/groups/public
mavenReleasesRepository=https://maven.taktik.be/content/repositories/releases/
mavenSnapshotsRepository=https://maven.taktik.be/content/repositories/snapshots/```

## Run locally

Update your run config to use Java 17, activate the 'dev' profile, and use the following VM options:
`--add-modules java.se --add-exports java.base/jdk.internal.ref=ALL-UNNAMED --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/sun.nio.ch=ALL-UNNAMED --add-opens java.management/sun.management=ALL-UNNAMED --add-opens jdk.management/com.sun.management.internal=ALL-UNNAMED`

## Deploy on Kubernetes

For Hz5, need a new RBAC:

```
➜ kubectl apply -f hz-rbac.yaml
clusterrole.rbac.authorization.k8s.io/hazelcast-cluster-role created
clusterrolebinding.rbac.authorization.k8s.io/hazelcast-cluster-role-binding created
```
