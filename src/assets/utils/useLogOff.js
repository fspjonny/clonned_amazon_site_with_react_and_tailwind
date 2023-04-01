import { useCallback } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

/**
 * Hook personalizado para remover um cookie e redirecionar para a página inicial.
 *
 * @param {string} cookieName O nome do cookie a ser removido.
 * @returns {function} Uma função `removeCookie` encapsulada, que remove o cookie especificado e redireciona para a página inicial.
 */

export function useMakeLogoff(cookieName) {
  const navigate = useNavigate()

/**
 * Função para remover um cookie e redirecionar para a página inicial.
 *
 * @returns {void} Esta função não retorna nada.
 */

  const logOff = useCallback(() => {
    Cookies.remove(cookieName)
    navigate("/")
    window.location.reload()
  }, [cookieName, navigate])

  return logOff
}
