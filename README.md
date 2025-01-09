Инструкции по развертыванию poinz Этот документ содержит пошаговые инструкции по настройке и развертыванию приложения poinz в кластере Kubernetes и локально с помощью minikube и dokcer-compose. Также включены сведения об изменениях в проекте, а также как собрать и развернуть приложение.

Изменения в проекте Client

В веб паке изменен URI для подключения к сервисам.

Образы содержатся в открытом репозитории Docker Hub
https://hub.docker.com/repository/docker/woixi/poinz

Инструкция по деплою в docker-compose
1. Устанавливаем docker-compose
```
apt install docker-compose
```
2. Запускаем билд и апаем контейнеры
```
docker-compose up --build -d
```
3. Проверяем http://localhost:9000
```
docker ps -a
```

Инструкции по деплою в kubernetes:
1. Устанавливаем nginx-ingress
```
helm install ingress-nginx ingress-nginx/ingress-nginx --namespace ingress-nginx --create-namespace
```
2. Применяем манифесты последовательно
```
kubectl apply -f your-repository/mongodb.yaml
kubectl apply -f your-repository/client.yaml
kubectl apply -f your-repository/server.yaml
```
3. Проверяем что все контейнеры запущены и находятся в статусе running kubectl get pods, так же проверям srv kubectl get srv
4. В случае если все плохо и статусы показывают иной вариант событий рекомендуется сделать kubectl rollout restart deployment
```
kubectl rollout restart deployment poinz-server-deployment
kubectl rollout restart deployment poinz-client-deployment
```
Делаем port forward
```
kubectl port-forward service/poinz-server-service 3000:3000
kubectl port-forward service/poinz-client-service 9000:9000
```

Инструкция по деплою в миникуб:

1. Запустите Миникуб и активируйте Ingress:
```
minikube start --driver=docker
minikube addons enable ingress
```
2. Проверка доступа к Миникубу
Убедитесь, что kubectl работает с кластером Minikube:
```
kubectl config use-context minikube
```
4. Применяем наши манифесты:
```
kubectl apply -f your-repository/mongodb.yaml
kubectl apply -f your-repository/client.yaml
kubectl apply -f your-repository/server.yaml
kubectl apply -f your-repository/ingress.yaml
```
Делаем port forward
```
kubectl port-forward service/poinz-server-service 3000:3000
kubectl port-forward service/poinz-client-service 9000:9000
```
>>>>>>> c54c328c208ee62f7948856ad30b7d4c1cee63d0
