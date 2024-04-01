

export default function CoreConcept({item}){;
    return(
        <li>
        <img src={item.image} alt={item.title}/>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </li>
    )
  } 