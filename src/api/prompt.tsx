
export const buildPrompt = (
  name: string, 
  bio: string, 
  interests: string, 
  occupation: string,
  other: string,
) => {
  let prompt = "";
  
  prompt += "Jeg matchet nettopp med en nydelig jente på Tinder.";
  prompt += " Jeg vil veldig gjerne imponere henne med en morsom, varm og vennlig opening line som spiller på infoen på profilen hennes.";
  prompt += " Åpningen bør være noe som får henne til å le og ønske å svare, og den burde være varm, vennlig, morsom og kanskje litt cheeky.";
  prompt += " Navnet hennes er " + name + ",";

  if (bio) {
    prompt += " og bioen hennes er '" + bio + "'.";
  } else {
    prompt += " og hun har ikke skrevet noen bio.";
  }
  if (interests) {
    prompt += " Hun har listed de følgende interessene på profilen sin: " + interests + ".";
  } else {
    prompt += " Hun har ikke listet noen interesser på profilen sin.";
  }
  if (occupation) {
    prompt += " Under occupation har hun skrevet '" + occupation + "'.";
  }
  if (other) {
    prompt += " Litt tilleggsinformasjon: '" + other + "'.";
  }

  prompt += " Vær så snill og hjelp meg med å komme opp med tre alternativer til åpningsmeldinger som vil få henne til å ønske å svare.";
  prompt += " Ikke vær for 'woke'. Det er greit å være litt edgy.";
  prompt += " Ikke svar med noe annet enn åpningsmeldingene, og list dem som i markdown som alternativ 1, 2 og 3.";

  return prompt;
}