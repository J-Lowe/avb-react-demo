import { useState } from "react";

export declare interface EmailProp {
  email?: string
}

function Email(prop: EmailProp) {
  const [showDelete, setShowDelete] = useState(false);

  return (
    <div onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>
      <p>{prop.email} {showDelete && (<button>-</button>)}</p>
    </div>
  )
}

export default Email;