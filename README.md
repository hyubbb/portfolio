## 포트폴리오 페이지

https://portfoliohyub.netlify.app/


![portfolio](https://github.com/hyubbb/portfolio/assets/32926006/e62f7bcb-a387-4039-a52f-20780869a8f3)




## 설명

- 웹팩을 이용하여 프로젝트를 빌드하고 싶어서 만들게 된 포트폴리오 페이지입니다.
- 필요한 정보만 담아서 깔끔하게 정보를 전달하기 위해서 만들었습니다.
- 가능한한 컴포넌트 단위로 페이지를 관리하여 구성하려고 했습니다.

<br>

## 기록

웹팩을 사용할때 설정해 줘야하는 부분과 주의 해야 할 점

많은 기능들이 있기때문에, 너무 많은 최적화를 시도하거나 필요이상의 플러그인을 사용하지 않도록 주의해야 했습니다.    
주의점의 하나로 예를들면, loader의 설정을 해줘야할때 순서를 지켜야 한다는 점입니다.

```jsx
["style-loader", "css-loader", "sass-loader"]
```

sass코드를 css로 변환하고 css를 style태그로 삽입하는 작업의 흐름을 신경써서 작성을 하여야 했습니다.
 
