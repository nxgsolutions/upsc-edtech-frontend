import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const getToken = async () => {
    const token_response = await axios.post(process.env.NEXT_PUBLIC_API_URL + "/auth/generate-token", {

      'clientId': process.env.NEXT_PUBLIC_CLIENT_ID,
    }
    );
    return token_response.data.token
    // console.log("")
  }

  const getData=async ()=>{
    try{ 
      const token= await getToken()
  
      const response = await axios.get(process.env.NEXT_PUBLIC_API_URL+"/article//summarization/65c16bb1c08c53aca2dbde94",{
              headers: { 
                  'Content-Type': 'application/json', 
                  'Authorization': 'Bearer '+token
                }
          }
      );
    
       return response.data
      
        }
        catch(error){
          console.log("error",error)
        }
     }


export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    articleLoading:true,
    articles:{}
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setLoading:state=>{
        state.articleLoading=true
    },
    getArticleData:(state,action)=>{
        console.log("action",action.payload.type)
       switch(action.payload.type){

        case "SUCCESS":{
            console.log("action success")

            state.articleLoading=false,
            state.articles=action.payload.payload
        }

       }
        

    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,setLoading,getArticleData} = counterSlice.actions

export default counterSlice.reducer