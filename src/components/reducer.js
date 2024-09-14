export const initialstate={
    basket:[],
    user:''
};
export const reducer =(state,action) =>{
    console.log(state);
    console.log("action");
    console.log(action);
    switch(action.type){
        case 'add':
            return {
                ...state,
                basket: [...state.basket,action.item]
            };
        case 'delete':
        
        
            const found_index=state.basket.findIndex(
                    (item)=>
                        item.pid===action.pid);
            let new_basket=[...state.basket];

            if (found_index>=0){
                new_basket.splice(found_index,1)
            };

        

                
            return {
                ...state,
                basket:new_basket
            } 
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

        default:
            return state;
    }
    

};