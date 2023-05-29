import {React, useState, useRef, useEffect} from 'react'
import UserCard from './UserCard'
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
  useId,
} from "@floating-ui/react";

const Post = ({
    username, 
    timestamp, 
    text,
    imageUrl,
    externalUrl,
   }) => {
 
   // const seed = Math.round(Math.random() * 100);
   // https://avatars.dicebear.com/api/open-peeps/${seed}.svg
   const [isOpen, setOpen] = useState(false);

   const handleUser = () => {
     setOpen(!isOpen);
   };

   const {refs, floatingStyles, context}= useFloating({
            open: isOpen,
            onOpenChange:setOpen,
            placement:'right',
            strategy:'fixed',
            autoUpdate:true,
            transform: true,
            middleware:[
                offset({
                     mainAxis:8,
                     crossAxis:-10,
                }),
                flip({fallbackAxisSideDirection:"ed"}),
                shift(),
            ],
           

   });
   const click = useClick(context);
   const dismiss = useDismiss(context);
   const role = useRole(context);
   const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role
  ]);

  const headingId = useId();


   return (
     <div className="post">
       <div className='avatar-wrapper'>
         <img src={`${imageUrl}`} alt='' className='avatar' />
       </div>
 
       <div className='post-content'>
         <p className='post-owner'>
           <div ref={refs.setReference}{...getReferenceProps()}>
             <p className="hover:underline" onClick={handleUser} ref={useRef()}>{username}</p>
           </div>
          
           {isOpen &&(
                <FloatingFocusManager context={context} modal={false}>
                    <div 
                    className="Popover"
                    ref={refs.setFloating}
                    style={floatingStyles}
                    aria-labelledby={headingId}
                    {...getFloatingProps()}
                    >
                        <UserCard user={username} imageUrl={imageUrl} id={`${username}-float`}/>
                    </div>
                </FloatingFocusManager>
            
            )}
           <small className="timestamp">{timestamp}</small>
         </p>
         <div className='post-text'>
           {text}  
           {externalUrl && (
             <a href={externalUrl} className="font-bold font-mono underline text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-600">
               link.
             </a>
           )}
         </div>
       
       </div>
     </div>
   );
 };

export default Post



