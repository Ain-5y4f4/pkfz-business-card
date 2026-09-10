/* =========================================
   CURRENT YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================================
   SAVE CONTACT
========================================= */

function downloadContact() {


    const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Noor Haslinda Binti Khalid
N:Khalid;Noor Haslinda Binti;;;
ORG:Port Klang Free Zone
TITLE:PA to CEO and Manager Administration
ROLE:PA to CEO and Manager Administration
DEPARTMENT:Administration
TEL;TYPE=CELL:+60173862711
TEL;TYPE=WORK:+60331015568
EMAIL;TYPE=WORK:Linda@pkfz.com
URL:https://www.pkfz.com
END:VCARD`;


    const blob = new Blob(
        [vcard],
        {
            type: "text/vcard;charset=utf-8"
        }
    );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement("a");


    link.href = url;


    link.download =
        "Noor_Haslinda_Binti_Khalid.vcf";


    document.body.appendChild(link);


    link.click();


    document.body.removeChild(link);


    URL.revokeObjectURL(url);

}



/* =========================================
   SHARE CONTACT
========================================= */

async function shareContact() {


    const contactText = `

Noor Haslinda Binti Khalid

PA to CEO and Manager Administration

Administration

Port Klang Free Zone

Email:
Linda@pkfz.com

Mobile:
017-386 2711

Office:
+603-3101 5568

Website:
https://www.pkfz.com

`;


    if (navigator.share) {


        try {


            await navigator.share({

                title:
                    "Noor Haslinda Binti Khalid",

                text:
                    contactText,

                url:
                    window.location.href

            });


        }

        catch (error) {


            console.log(
                "Sharing cancelled."
            );


        }


    }

    else {


        try {


            await navigator.clipboard.writeText(
                window.location.href
            );


            alert(
                "Business card link copied!"
            );


        }

        catch (error) {


            alert(
                "Your browser does not support sharing."
            );


        }

    }

}
