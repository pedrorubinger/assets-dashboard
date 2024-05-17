import { SVGIconProps } from 'src/interfaces/icon'
import { Colors } from 'src/styles/tokens/colors'

interface Props extends SVGIconProps {}

export const ComponentSVG: React.FC<Props> = ({ color = Colors.blue500 }) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7572 7.68058L20.7572 7.68051C20.7536 7.66959 20.7486 7.66003 20.7432 7.64977C20.7414 7.64624 20.7395 7.64263 20.7376 7.63884C20.7327 7.62903 20.7278 7.61983 20.7229 7.61062C20.718 7.60141 20.7131 7.5922 20.7081 7.58237L20.7082 7.58241C20.7062 7.57912 20.7042 7.57566 20.7022 7.57212C20.6967 7.56242 20.6908 7.55215 20.6836 7.54318L20.6836 7.54315C20.664 7.5137 20.6419 7.48426 20.6198 7.4548C20.6075 7.44007 20.5928 7.4229 20.5781 7.40819L20.5781 7.40814C20.5683 7.39592 20.5561 7.38613 20.5438 7.37631L20.5437 7.37627C20.5335 7.36608 20.5222 7.35708 20.5113 7.34842C20.5064 7.34458 20.5017 7.3408 20.4971 7.33701L20.7572 7.68058ZM20.7572 7.68058C20.7621 7.69037 20.7658 7.70077 20.7692 7.7112C20.7725 7.7216 20.7756 7.73204 20.7793 7.74186L20.7572 7.68058ZM20.4432 7.2978L20.4431 7.29777L11.4688 1.32388C11.3304 1.23146 11.1678 1.18214 11.0014 1.18214C10.835 1.18214 10.6723 1.23146 10.5339 1.32388L1.5547 7.30267L1.55465 7.30271L1.55464 7.30271C1.55224 7.30391 1.54983 7.30572 1.54736 7.30757L1.54734 7.30759C1.5449 7.30941 1.54241 7.31128 1.53991 7.31253L1.54 7.31247C1.52773 7.32229 1.51544 7.33213 1.50069 7.34196L1.5007 7.34195C1.48948 7.34996 1.47933 7.35901 1.46952 7.36775C1.46432 7.37239 1.45921 7.37694 1.45408 7.38121L1.45407 7.38122C1.44796 7.38611 1.44246 7.39161 1.43693 7.39714L1.43692 7.39715C1.4314 7.40266 1.42586 7.40821 1.4197 7.41314L1.41974 7.4131C1.40501 7.42783 1.39031 7.44253 1.37806 7.45968L1.37802 7.45973L1.37802 7.45973C1.3535 7.4867 1.33388 7.51612 1.31425 7.54803C1.31149 7.55264 1.30838 7.55725 1.30519 7.56197C1.30412 7.56356 1.30304 7.56516 1.30196 7.56678C1.29766 7.57322 1.29338 7.57995 1.28972 7.58728L1.2897 7.58731C1.27989 7.60447 1.27008 7.6241 1.26026 7.64374L1.26025 7.64375L1.26023 7.64379C1.25657 7.6499 1.25351 7.65662 1.25044 7.66368C1.2499 7.66493 1.24935 7.66619 1.2488 7.66746C1.24626 7.67335 1.24364 7.67942 1.24061 7.68549L1.24011 7.68525L1.24063 7.68544C1.23695 7.69525 1.23328 7.70567 1.2296 7.71609L1.22959 7.71612C1.2259 7.72656 1.22222 7.737 1.21853 7.74683L1.21801 7.74663L1.21854 7.74681C1.21753 7.74983 1.21653 7.75274 1.21555 7.75559C1.21172 7.76667 1.20823 7.77679 1.20628 7.78846L1.20628 7.78849H1.20628C1.20137 7.81057 1.19647 7.8351 1.19156 7.85964L1.19155 7.85969L1.18419 7.89648C1.17928 7.93329 1.17683 7.97009 1.17683 8.0069V13.9857C1.17683 14.0225 1.17928 14.0593 1.18419 14.0961C1.18419 14.0961 1.18419 14.0961 1.18419 14.0961L1.19155 14.1329L1.19155 14.1329L1.20626 14.204C1.20627 14.2041 1.20627 14.2041 1.20627 14.2041C1.20873 14.2114 1.21057 14.2182 1.21241 14.2249C1.21425 14.2317 1.21609 14.2384 1.21854 14.2458C1.2259 14.2679 1.23326 14.2875 1.24063 14.3071L1.24064 14.3072C1.24428 14.3181 1.24927 14.3276 1.25463 14.3379C1.25647 14.3414 1.25836 14.3451 1.26025 14.3488C1.26275 14.3538 1.26509 14.3587 1.26739 14.3634C1.27414 14.3774 1.28055 14.3906 1.28969 14.4053L1.28969 14.4053C1.29167 14.4086 1.29364 14.412 1.29565 14.4156C1.30118 14.4253 1.30703 14.4355 1.31421 14.4445L1.31422 14.4445C1.31834 14.4503 1.32216 14.456 1.32599 14.4618C1.33362 14.4732 1.34122 14.4846 1.35102 14.496L1.35104 14.4961L1.38049 14.5329C1.39277 14.5476 1.40749 14.5648 1.4222 14.5795L1.42224 14.5795C1.43202 14.5918 1.44424 14.6015 1.45653 14.6114L1.45658 14.6114C1.46677 14.6216 1.47812 14.6306 1.48905 14.6393C1.49389 14.6431 1.49865 14.6469 1.50319 14.6507L1.50283 14.6511M20.4432 7.2978L1.50318 14.6507L1.50283 14.6511M20.4432 7.2978C20.4456 7.299 20.448 7.30081 20.4505 7.30266C20.4529 7.30448 20.4554 7.30635 20.4579 7.30761L20.4432 7.2978ZM1.50283 14.6511C1.51511 14.6609 1.52739 14.6707 1.54212 14.6806L1.24011 14.3073C1.24376 14.3183 1.24878 14.3279 1.25415 14.3382C1.25599 14.3417 1.25787 14.3453 1.25975 14.3491C1.26225 14.3541 1.26458 14.3589 1.26688 14.3637C1.27363 14.3776 1.28006 14.3909 1.28922 14.4056C1.29118 14.4088 1.29314 14.4123 1.29515 14.4158C1.30068 14.4255 1.30656 14.4358 1.31377 14.4448C1.31786 14.4506 1.32168 14.4563 1.3255 14.462C1.33314 14.4735 1.34078 14.4849 1.3506 14.4964L1.38006 14.5332C1.39234 14.548 1.40707 14.5652 1.42181 14.5799C1.43162 14.5922 1.4439 14.602 1.45617 14.6118C1.46639 14.622 1.47779 14.6311 1.48873 14.6397C1.49357 14.6436 1.49831 14.6473 1.50283 14.6511ZM20.6914 14.4448C20.6942 14.4403 20.6973 14.4357 20.7005 14.4309C20.7058 14.423 20.7114 14.4148 20.716 14.4056C20.7209 14.3957 20.7258 14.3865 20.7307 14.3773C20.7357 14.3681 20.7406 14.3589 20.7455 14.3491C20.7498 14.3419 20.7533 14.3338 20.7569 14.3254C20.7595 14.3195 20.7621 14.3134 20.7651 14.3073L20.7646 14.3071C20.7683 14.2973 20.7719 14.2869 20.7756 14.2765C20.7774 14.2716 20.7791 14.2667 20.7808 14.2619C20.7828 14.2564 20.7847 14.251 20.7867 14.2458C20.7916 14.2335 20.7965 14.2188 20.7989 14.2041L20.7989 14.204C20.804 14.189 20.8067 14.1727 20.8095 14.1561C20.8108 14.1485 20.8121 14.1407 20.8137 14.1329L20.821 14.0961C20.8259 14.0593 20.8284 14.0225 20.8284 13.9857V8.00204C20.8235 7.97748 20.8207 7.9529 20.818 7.92835C20.8167 7.91609 20.8153 7.90383 20.8137 7.89159C20.8137 7.89158 20.8137 7.89158 20.8137 7.89157L20.8063 7.85477C20.8048 7.8471 20.8035 7.83969 20.8022 7.83236C20.7994 7.81619 20.7966 7.8005 20.7916 7.78362C20.7906 7.78063 20.7896 7.77773 20.7886 7.77488L20.6914 14.4448ZM1.28922 7.58703C1.2794 7.60421 1.26958 7.62385 1.25976 7.64348L1.28922 7.58703ZM11.8448 3.60009V3.6002L11.8467 3.60146V7.53301H11.8462L11.8469 7.53348L15.5054 9.97901L15.5049 9.97976L15.506 9.97901L18.4598 8.00491L18.4595 8.00444L18.4592 8.00398L18.4587 8.00323L11.8478 3.60087V3.59953H11.8473V3.59897H11.8448V3.59953V3.60009ZM11.8467 3.60009V3.60012L11.8466 3.60009H11.8467ZM10.155 3.59953H10.1545L3.54292 8.00398L3.54323 8.00444L3.54354 8.00491L3.54404 8.00565L6.49672 9.97901L6.49622 9.97976L6.49734 9.97901L10.1558 7.53348L10.1561 7.53385V7.53301V3.59953H10.1555H10.155ZM2.86556 9.58078L2.86524 9.58124L2.865 9.58162V12.4044H2.86556H2.86611H2.86656L4.97747 10.9931L4.97716 10.9926L4.97685 10.9921L4.97635 10.9914L2.86587 9.58032L2.86556 9.58078ZM10.1555 18.3832L10.1558 18.3828L10.1561 18.3824V14.4498H10.1565L10.1558 14.4493L6.49734 12.0038L6.49784 12.003L6.49672 12.0038L3.54292 13.9779L3.54323 13.9783L3.54354 13.9788L3.54404 13.9795L10.1552 18.3837L10.1555 18.3832ZM10.9998 12.9868L10.9993 12.9876L11.0005 12.9868L13.9862 10.9906L13.9859 10.9902L13.9856 10.9897L13.9851 10.9889L11.0005 8.99594L11.001 8.99519L10.9998 8.99594L8.01413 10.9921L8.01444 10.9926L8.01475 10.9931L8.01525 10.9938L10.9998 12.9868ZM11.8454 18.3832H11.8458L18.4574 13.9788L18.4571 13.9783L18.4568 13.9779L18.4563 13.9771L15.5036 12.0038L15.5041 12.003L15.503 12.0038L11.8445 14.4493L11.8442 14.4489V14.4498V18.3832H11.8448H11.8454ZM19.1348 12.402L19.1351 12.4015L19.1353 12.4012V9.57833H19.1348H19.1342H19.1337L17.0228 10.9897L17.0231 10.9902L17.0235 10.9906L17.024 10.9914L19.1344 12.4025L19.1348 12.402Z"
        fill={color}
        stroke={color}
        stroke-width="0.00111607"
      />
    </svg>
  )
}
