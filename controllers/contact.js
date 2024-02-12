import { transporter } from "../nodemailer.js";

export const askquestion = (req, res) => {
  const { question, userId, phone, propertySlug } = req.body;
  let info = {
    from: '"Propertyease " <noreply@propertyease.in>', // sender address
    to: "akshit.calinfo07@gmail.com", // list of receivers
    subject: `Question asked by ${userId}`, // Subject line
    html: `<div style="margin:0px;padding:0px;">
    <div style="margin:0px;padding:0px;  margin: 30px auto; width: 700px; padding: 10px 10px;  background-color: #f6f8fc; box-shadow:rgba(13, 109, 253, 0.25) 0px 25px 50px -10px !important; ">
       <table cellpadding="0" style="width:700px;margin:auto;display:block;font-family:\'trebuchet ms\',geneva,sans-serif;">
          <tbody>
             <tr>
                <td style="width:700px;display:block;clear:both">
                   <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style=" margin-top:30px;background-clip:padding-box;border-collapse:collapse;border-radius:5px;">
 
                      <tr style="height:80px; text-align:center;">
                         <td style="padding-left:22px; padding-bottom: 10px"><img src="https://property-five.vercel.app/images/logo.png">
                         </td>
                      </tr>
                </td>
             </tr>
             <tr>
                <td>
                   <table style="width:500px;clear:both" border="0" align="center" cellpadding="0" cellspacing="0">
 
                      <tr>
                         <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 30px 0px 0px 0px;">
 
                               <tr>
                                  <td height="10px" style="font-size: 16px;line-height: 24px;letter-spacing:.3px;">
                                     <p style="color:#404040; margin-bottom: 10px;"> Dear Admin,</b>
                                     <p style="margin-bottom: 10px; font-size: 16px;">${userId} is asking the following question</b></p>
                                     <p style="margin-bottom: 10px; font-size: 16px;">"${question}"</p>
                                     <p style="margin-bottom: 10px; font-size: 16px;">On property ${propertySlug}</p>
                                     <p style="margin-bottom: 10px; font-size: 16px;">You can Contact him/her on ${phone}</p>
                                  </td>
                               </tr>
                               <tr>
                                  <td height="10px" style="font-size: 15px;line-height: 24px;letter-spacing:.3px;">
                                     <p style="color:#404040; margin-bottom:0px;"> <b>Thanks & Regards,
                                        </b></p>
                                     <p style="margin-bottom:0px; font-size: 15px;">Admin Team</p>
                                     <p style="margin-bottom: 10px; font-size: 15px;">Propertyease.in</p>
 
                                  </td>
                               </tr>
                            </table>
                         </td>
                      </tr>
 
                   </table>
                </td>
             </tr>
             <tr>
                <td style="font-size: 14px;text-align: center;line-height: 21px;letter-spacing: .3px; color: #155298; height: 68px;">
 
                   <p style="line-height:22px;margin-bottom:0px;padding: 10px;  color:#000;font-size: 12px;">
                      &copy; Copyright ${new Date().getFullYear()} All Rights Reserved.</p>
                </td>
             </tr>
 
          </tbody>
       </table>
    </div>
 </div>`,
  };
  transporter.sendMail(info, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Mail Sent");
  });
};

export const freeEnquiry = (req, res) => {
  const { name, email, phone } = req.body;
  let info = {
    from: '"Propertyease " <noreply@propertyease.in>', // sender address
    to: "akshit.calinfo07@gmail.com", // list of receivers
    subject: `Free Enquiry Request by ${name}`, // Subject line
    html: `<div style="margin:0px;padding:0px;">
      <div style="margin:0px;padding:0px;  margin: 30px auto; width: 700px; padding: 10px 10px;  background-color: #f6f8fc; box-shadow:rgba(13, 109, 253, 0.25) 0px 25px 50px -10px !important; ">
         <table cellpadding="0" style="width:700px;margin:auto;display:block;font-family:\'trebuchet ms\',geneva,sans-serif;">
            <tbody>
               <tr>
                  <td style="width:700px;display:block;clear:both">
                     <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0" style=" margin-top:30px;background-clip:padding-box;border-collapse:collapse;border-radius:5px;">
   
                        <tr style="height:80px; text-align:center;">
                           <td style="padding-left:22px; padding-bottom: 10px"><img src="https://property-five.vercel.app/images/logo.png">
                           </td>
                        </tr>
                  </td>
               </tr>
               <tr>
                  <td>
                     <table style="width:500px;clear:both" border="0" align="center" cellpadding="0" cellspacing="0">
   
                        <tr>
                           <td>
                              <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding: 30px 0px 0px 0px;">
   
                                 <tr>
                                    <td height="10px" style="font-size: 16px;line-height: 24px;letter-spacing:.3px;">
                                       <p style="color:#404040; margin-bottom: 10px;"> Dear Admin,</b>
                                       <p style="margin-bottom: 10px; font-size: 16px;">${name} is asking for a free enquiry.</b></p>
                                       <p style="margin-bottom: 10px; font-size: 16px;">With Email : ${email}</p>
                                       <p style="margin-bottom: 10px; font-size: 16px;">You can Contact him/her on ${phone}</p>
                                    </td>
                                 </tr>
                                 <tr>
                                    <td height="10px" style="font-size: 15px;line-height: 24px;letter-spacing:.3px;">
                                       <p style="color:#404040; margin-bottom:0px;"> <b>Thanks & Regards,
                                          </b></p>
                                       <p style="margin-bottom:0px; font-size: 15px;">Admin Team</p>
                                       <p style="margin-bottom: 10px; font-size: 15px;">Propertyease.in</p>
   
                                    </td>
                                 </tr>
                              </table>
                           </td>
                        </tr>
   
                     </table>
                  </td>
               </tr>
               <tr>
                  <td style="font-size: 14px;text-align: center;line-height: 21px;letter-spacing: .3px; color: #155298; height: 68px;">
   
                     <p style="line-height:22px;margin-bottom:0px;padding: 10px;  color:#000;font-size: 12px;">
                        &copy; Copyright ${new Date().getFullYear()} All Rights Reserved.</p>
                  </td>
               </tr>
   
            </tbody>
         </table>
      </div>
   </div>`,
  };
  transporter.sendMail(info, (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Sent");
  });
};
