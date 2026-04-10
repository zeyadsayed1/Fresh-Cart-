import { RegisterResponse, userDataType } from "./register";
import { handleUserRegister } from "./register.action";
import { toast } from "sonner";

export async function sendUserData(userData:userDataType) { 
    const response = await handleUserRegister(userData);
    if (response === true) {
       toast.success('User added Successfully', {
  position: "top-right",
});
    } else {
        toast.error(response, {
            position:"top-right"
        })
    }
}