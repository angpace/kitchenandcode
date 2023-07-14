import {useNavigate} from "react-router-dom"
import { LoginContainer } from "./LoginElements"

function Manage({currentUser, toast, Toaster}){
    const navigate = useNavigate()

    if (!currentUser) {
        return (
        <div class="d-flex justify-content-center">
            <div class="spinner-border text-info" role="status">
                <span class="sr-only">Loading...</span>
            </div>
      </div>
        )
    }

    console.log(currentUser)

    function deleteSubscription (e){
        e.preventDefault()
        fetch(`users/${currentUser.id}`, {
            method: "DELETE",
        })
        toast(
            "What about all the good times?",
            {
              duration: 3000,
            }
          )
          toast.success("Successfully Unsubscribed");
        navigate("/login")
    }
   
    return(
        <LoginContainer>
        <Toaster
              position="bottom-right"
              reverseOrder={false}
            />
        <h3 className="blog_title">Hi, {currentUser.name}!</h3>
        <button className="submit_subscription" onClick={deleteSubscription}>Unsubscribe</button>
        </LoginContainer>
    )
    

}

export default Manage;