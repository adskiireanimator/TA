export default{
    state: {
        friends:[]
    },
    getters: {
        friendsarr(state){
            return state.friends
        }
    },
    mutations: {
        updatefriends(state,friends){
            state.friends=friends;
        }
    },
    actions: {
        async fetchusers(ctx, limit=3){
            //const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
            //const posts= await res.json();
            const friends=[{
                    id:24,
                    name:"IVAN BATOV",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:25,
                    name:"IVAN BATOV 25",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:26,
                    name:"IVAN BATOV26",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:27,
                    name:"IVAN BATOV",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:28,
                    name:"IVAN BATOV 25",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:29,
                    name:"IVAN BATOV26",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:30,
                    name:"IVAN BATOV",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:31,
                    name:"IVAN BATOV 25",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:32,
                    name:"IVAN BATOV26",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:33,
                    name:"IVAN BATOV",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:34,
                    name:"IVAN BATOV 25",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                },{
                    id:35,
                    name:"IVAN BATOV26",
                    status:"Свободен",
                    photo:"https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo"
                }
            ]
            ctx.commit('updatefriends',friends)
        }
    },
}