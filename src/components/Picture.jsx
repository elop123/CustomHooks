import { usePicture } from "./PictureHook";

export function Picture(){
    const {images} = usePicture();
    console.log(images)

    return(
        <section>
          {images &&(
            <>
            <img src={(`${images}`)} alt="" />
            </>
          )}
        </section>
          
            
        
    )
}

