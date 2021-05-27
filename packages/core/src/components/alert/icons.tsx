import { h } from '@stencil/core'

export const SuccessIcon = () => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8.5C0 10.6217 0.842855 12.6566 2.34315 14.1569C3.84344 15.6571 5.87827 16.5 8 16.5C10.1217 16.5 12.1566 15.6571 13.6569 14.1569C15.1571 12.6566 16 10.6217 16 8.5C16 6.37827 15.1571 4.34344 13.6569 2.84315C12.1566 1.34285 10.1217 0.5 8 0.5C5.87827 0.5 3.84344 1.34285 2.34315 2.84315C0.842855 4.34344 0 6.37827 0 8.5H0ZM12.16 7.06C12.2755 6.90594 12.3316 6.71538 12.318 6.52329C12.3043 6.3312 12.2219 6.15048 12.0857 6.01431C11.9495 5.87815 11.7688 5.79566 11.5767 5.78201C11.3846 5.76836 11.1941 5.82446 11.04 5.94L7.2 9.78L5.36 7.94C5.20594 7.82446 5.01538 7.76836 4.82329 7.78201C4.6312 7.79566 4.45048 7.87815 4.31431 8.01431C4.17815 8.15048 4.09566 8.3312 4.08201 8.52329C4.06836 8.71538 4.12446 8.90594 4.24 9.06L6.64 11.46C6.96 11.78 7.44 11.78 7.76 11.46L12.16 7.06Z" fill="#27B43B"/>
    </svg>

  )
}

export const WarningIcon = () => {
  return (
    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.928029 12.9634L6.92643 0.963405C7.36883 0.0786047 8.63043 0.0786047 9.07283 0.963405L15.0712 12.9634C15.1627 13.1463 15.2059 13.3496 15.1968 13.5539C15.1876 13.7582 15.1264 13.9568 15.0189 14.1308C14.9114 14.3048 14.7613 14.4485 14.5827 14.5481C14.4041 14.6478 14.203 14.7001 13.9984 14.7002H2.00163C1.79704 14.7003 1.59583 14.648 1.41711 14.5484C1.2384 14.4488 1.08812 14.3052 0.980541 14.1312C0.872966 13.9571 0.811672 13.7585 0.802481 13.5541C0.79329 13.3497 0.836508 13.1464 0.928029 12.9634ZM8.00003 5.1002C8.2122 5.1002 8.41568 5.18449 8.56571 5.33452C8.71574 5.48455 8.80003 5.68803 8.80003 5.9002V8.3002C8.80003 8.51238 8.71574 8.71586 8.56571 8.86589C8.41568 9.01592 8.2122 9.1002 8.00003 9.1002C7.78786 9.1002 7.58437 9.01592 7.43434 8.86589C7.28431 8.71586 7.20003 8.51238 7.20003 8.3002V5.9002C7.20003 5.68803 7.28431 5.48455 7.43434 5.33452C7.58437 5.18449 7.78786 5.1002 8.00003 5.1002ZM8.80003 11.5002C8.80003 11.7124 8.71574 11.9159 8.56571 12.0659C8.41568 12.2159 8.2122 12.3002 8.00003 12.3002C7.78786 12.3002 7.58437 12.2159 7.43434 12.0659C7.28431 11.9159 7.20003 11.7124 7.20003 11.5002C7.20003 11.288 7.28431 11.0845 7.43434 10.9345C7.58437 10.7845 7.78786 10.7002 8.00003 10.7002C8.2122 10.7002 8.41568 10.7845 8.56571 10.9345C8.71574 11.0845 8.80003 11.288 8.80003 11.5002Z" fill="#FEB72C"/>
    </svg>

  )
}

export const ErrorIcon = () => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0.5C3.5888 0.5 0 4.0888 0 8.5C0 12.9112 3.5888 16.5 8 16.5C12.4112 16.5 16 12.9112 16 8.5C16 4.0888 12.4112 0.5 8 0.5ZM7.2 5.3C7.2 5.08783 7.28429 4.88434 7.43431 4.73431C7.58434 4.58429 7.78783 4.5 8 4.5C8.21217 4.5 8.41566 4.58429 8.56569 4.73431C8.71571 4.88434 8.8 5.08783 8.8 5.3V8.5C8.8 8.71217 8.71571 8.91566 8.56569 9.06569C8.41566 9.21571 8.21217 9.3 8 9.3C7.78783 9.3 7.58434 9.21571 7.43431 9.06569C7.28429 8.91566 7.2 8.71217 7.2 8.5V5.3ZM8 12.5C8.21217 12.5 8.41566 12.4157 8.56569 12.2657C8.71571 12.1157 8.8 11.9122 8.8 11.7C8.8 11.4878 8.71571 11.2843 8.56569 11.1343C8.41566 10.9843 8.21217 10.9 8 10.9C7.78783 10.9 7.58434 10.9843 7.43431 11.1343C7.28429 11.2843 7.2 11.4878 7.2 11.7C7.2 11.9122 7.28429 12.1157 7.43431 12.2657C7.58434 12.4157 7.78783 12.5 8 12.5Z" fill="#ED443D"/>
    </svg>

  )
}

export const InfoIcon = () => {
  return (
    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16.5C12.4112 16.5 16 12.9112 16 8.5C16 4.0888 12.4112 0.5 8 0.5C3.5888 0.5 0 4.0888 0 8.5C0 12.9112 3.5888 16.5 8 16.5ZM8.8 11.7C8.8 11.9122 8.71571 12.1157 8.56569 12.2657C8.41566 12.4157 8.21217 12.5 8 12.5C7.78783 12.5 7.58434 12.4157 7.43431 12.2657C7.28429 12.1157 7.2 11.9122 7.2 11.7V8.5C7.2 8.28783 7.28429 8.08434 7.43431 7.93431C7.58434 7.78429 7.78783 7.7 8 7.7C8.21217 7.7 8.41566 7.78429 8.56569 7.93431C8.71571 8.08434 8.8 8.28783 8.8 8.5V11.7ZM8 4.5C7.78783 4.5 7.58434 4.58429 7.43431 4.73431C7.28429 4.88434 7.2 5.08783 7.2 5.3C7.2 5.51217 7.28429 5.71566 7.43431 5.86569C7.58434 6.01571 7.78783 6.1 8 6.1C8.21217 6.1 8.41566 6.01571 8.56569 5.86569C8.71571 5.71566 8.8 5.51217 8.8 5.3C8.8 5.08783 8.71571 4.88434 8.56569 4.73431C8.41566 4.58429 8.21217 4.5 8 4.5Z" fill="#33C2FF"/>
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.05887 6.875L11.7714 2.16249C11.8429 2.09341 11.9 2.01078 11.9392 1.91942C11.9784 1.82805 11.9991 1.72979 12 1.63036C12.0008 1.53093 11.9819 1.43232 11.9442 1.34029C11.9066 1.24826 11.851 1.16464 11.7807 1.09433C11.7104 1.02402 11.6267 0.968417 11.5347 0.930764C11.4427 0.893111 11.3441 0.874164 11.2446 0.875028C11.1452 0.875892 11.0469 0.89655 10.9556 0.935797C10.8642 0.975043 10.7816 1.03209 10.7125 1.10361L6 5.81613L1.28749 1.10361C1.14625 0.967206 0.957093 0.891726 0.760747 0.893432C0.564401 0.895139 0.37658 0.973894 0.237737 1.11274C0.0988943 1.25158 0.0201385 1.4394 0.0184323 1.63575C0.0167261 1.83209 0.0922059 2.02125 0.228615 2.16249L4.94113 6.875L0.228615 11.5875C0.157092 11.6566 0.100043 11.7392 0.0607968 11.8306C0.0215503 11.9219 0.000892309 12.0202 2.82741e-05 12.1196C-0.000835761 12.2191 0.0181114 12.3177 0.0557643 12.4097C0.0934171 12.5017 0.149022 12.5854 0.219333 12.6557C0.289645 12.726 0.373255 12.7816 0.465286 12.8192C0.557317 12.8569 0.655925 12.8758 0.755357 12.875C0.854789 12.8741 0.953053 12.8534 1.04442 12.8142C1.13578 12.775 1.21841 12.7179 1.28749 12.6464L6 7.93387L10.7125 12.6464C10.817 12.7518 10.9504 12.8238 11.0959 12.8531C11.2414 12.8824 11.3923 12.8677 11.5294 12.8109C11.6665 12.7541 11.7836 12.6578 11.8658 12.5342C11.948 12.4106 11.9915 12.2654 11.9908 12.1169C11.9908 12.0186 11.9714 11.9212 11.9338 11.8304C11.8962 11.7395 11.841 11.657 11.7714 11.5875L7.05887 6.875Z" fill="#212121"/>
    </svg>

  )
}