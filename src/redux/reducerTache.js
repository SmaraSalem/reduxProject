
const initialeTache={taches:[
{id : 1 ,description:"creation de de modale avec html5 ",isDone:"non"},
{id : 2,description:" designe bootstrap d'aoujout un client ",isDone:'oui'},
{id : 10,description:" faire le reducer de clients",isDone:'non'}
                   ]}
const reducerTache =( state=initialeTache, action  ) =>{
    switch(action.type){
        case "ajoutTache" : return{taches:[action.payload, ...state.taches]}
         case "modifierTache" : 
                         //trouver l'element a modifier 
                         const ele = state.taches.find(e=>e.id==action.payload.id)
                         //trouver l'index de cette element        
                         const index = state.taches.indexOf(ele)
                         //faire un copie de l'initiale state
                         const  arr = state.taches.slice()
                          // appliquer la modification sur le copie
                         arr[index]= action.payload 
                          
                         return{
                            // changer le contenu de la state avec le nouveau array

                            taches : arr    

                         }
                         
         
               
        default : return state 
    }
   
}
export default reducerTache;
