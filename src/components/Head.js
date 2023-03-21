import { Helmet } from "react-helmet";

export default function Head() {
    return (
        <Helmet>
        <title>Amazon Clone Page</title>
        <meta name="description" content="Página clone da Amazon gerada com Tailwind." />
        <meta name="author" content="Fábio da Silva Pedro." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"/>
      </Helmet>
    )    
}