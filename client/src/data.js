export const posts = [
  {
    "id": 1,
    "title": "Аутентификация пользователя с помощью OAuth 2.0",
    "img": "https://stytch.com/blog/wp-content/uploads/2023/03/What-is-oath2-1536x958.png",
    "desc": "Спецификация OAuth 2.0 определяет протокол делегирования , который полезен для передачи решений об авторизации в сети веб-приложений и API. OAuth используется в самых разных приложениях, в том числе для обеспечения механизмов аутентификации пользователей.",
    "longDesc": "Аутентификация в контексте доступа пользователя к приложению сообщает приложению, кто является текущим пользователем и присутствует ли он в данный момент. Протокол полной аутентификации, вероятно, также сообщит вам ряд атрибутов этого пользователя, таких как уникальный идентификатор, адрес электронной почты и то, как их вызывать, когда приложение говорит «Доброе утро». Аутентификация касается пользователя и его присутствия в приложении, и протокол аутентификации в масштабе Интернета должен иметь возможность делать это через сеть и границы безопасности. Однако OAuth не сообщает приложению ничего из этого.OAuth абсолютно ничего не говорит о пользователе, а также не говорит, как пользователь доказал свое присутствие или даже если он все еще там.Что касается клиента OAuth, он запросил токен, получил токен и в конечном итоге использовал этот токен для доступа к некоторому API.Он ничего не знает о том, кто авторизовал приложение и был ли там пользователь вообще.На самом деле, большая часть смысла OAuth заключается в предоставлении этого делегированного доступа для использования в ситуациях, когда пользователь не присутствует в соединении между клиентом и ресурсом, к которому осуществляется доступ.Это отлично подходит для авторизации клиента, но очень плохо для аутентификации, где весь смысл в том, чтобы выяснить, есть пользователь или нет(и кто он).В качестве дополнительной помехи для нашей темы, процесс OAuth обычно включает в себя несколько видов аутентификации: владелец ресурса проходит аутентификацию на сервере авторизации на этапе авторизации, клиент аутентифицируется на сервере авторизации в конечной точке токена, и может быть другими.Существование этих событий аутентификации в протоколе OAuth не означает, что сам протокол Oauth может надежно передавать аутентификацию.Однако, как оказалось, есть несколько вещей, которые можно использовать вместе с OAuth для создания протокола аутентификации и идентификации поверх этого протокола делегирования и авторизации.Почти во всех этих случаях основные функции OAuth остаются нетронутыми, и происходит то, что пользователь делегирует доступ к своей личности.к приложению, в которое они пытаются войти.Затем клиентское приложение становится потребителем Identity API, тем самым выясняя, кто авторизовал клиента в первую очередь.Одним из основных преимуществ построения аутентификации поверх авторизации таким образом является то, что он позволяет управлять согласием конечного пользователя, что очень важно для междоменной федерации удостоверений в масштабе Интернета.Еще одним важным преимуществом является то, что пользователь может делегировать доступ к другим защищенным API наряду сих идентичность одновременно, что значительно упрощает управление как разработчикам приложений, так и конечным пользователям.С помощью одного вызова приложение может узнать, вошел ли пользователь в систему, как приложение должно вызывать пользователя, загрузить фотографии для печати и публиковать обновления в своем потоке сообщений.Эта простота очень убедительна, но, выполняя обе функции одновременно, многие разработчики объединяют эти две функции.",
  },
  {
    "id": 2,
    "title": "How to Animate Elements?",
    "img": "https://images.pexels.com/photos/1742370/pexels-photo-1742370.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
    "longDesc":
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
  },
  {
    "id": 3,
    "title": "learn JS in 30 days",
    "img": "https://images.pexels.com/photos/1161547/pexels-photo-1161547.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
    "longDesc":
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit ad optio magnam veniam nihil, quasi in architecto dignissimos rerum, soluta ipsa nobis eos mollitia eligendi adipisci possimus pariatur dolorem ea?",
  },
]