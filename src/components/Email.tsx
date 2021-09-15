import { useState } from "react";

export declare interface EmailProp {
  email?: string
}

function Email(prop: EmailProp) {
  const [showDelete, setShowDelete] = useState(false);

  return (
      <p><span onMouseEnter={() => setShowDelete(true)} onMouseLeave={() => setShowDelete(false)}>{prop.email} {showDelete && (<button>-</button>)}</span></p>
  )
}

export default Email;