import React, { useState } from "react";
import Card from "./Card";

function Cards() {
  const [icons, setIcons] = useState(false);

  return (
    <div className="card-container">
      <Card
        src={
          "https://uc058f8f3ce2429fcf201042caf8.previews.dropboxusercontent.com/p/thumb/ABGJXvWTvRsIPXLcfcOKIS1X-mBjKJ_-uVL7ufZpueODc0RYz3npzW4AaM79FGf2Z73IR5lkPtUfYCPK13wCy_xzbXxgA4nQGWt0miEvesVIo3rp_6XUwb1gYvdqGBzj24RIEN5NjLzRijvC8Y-w0inDDSKAj5I9oPqwhmw7lNPUu05ZrHGF4HkQ-_5NL0oaxbU-oOpBO0LTg0rix5mPEvTY5LsF9odX-kxh2V-pUdtTPqahY25HQL6FGlVy8IQlUnakRA4I28vN9XJd3PBsZHOVmD0KWwv1nlP1OhwEtoYZNAuyxjcyVdg9HIIpP7rNqQALbVeQuz-XirERH21F5e2NraJ051FnwI4YYoYkG0y1Gqr9uox4yhlTpmJlXxbJWx6TO4Na7LHT6HI-FCa2hn9K/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"lake inniscarra"}
        description={"Lake Inniscarra, Ireland - Pyramid"}
        profileSrc={
          "https://uceb39464f3416e8522411e2018b.previews.dropboxusercontent.com/p/thumb/ABFb_gHfa_a7pPVuHojMTMJ2RMJDwZAfn61QPvNxM4rFXnl7R9c-fi1Ya36__2rrZodvIrlFwFBOhESE6J1Fw-KQR1NaVy5slW2leghoB1vKNuqi0kC73Cag8zKuLgsfcwP0O-Kln4oYCp5H-j0SsQDFSqv87Ub7XhU8C-D2ruPGEpsS_jUxylGMyU7ZOytP8o2RYB0WanBdQPJY7DmjIMqSycuBppef6m4RX6bFv2v6uMMW-xvAdr41REJi-AojPzN6vIOUrxa-WRCJS2YI4crKQ0m4ZXoUyR3-eBRjqCS9vqGxaunM8gcZmncVKU9gPNnevxFrxCRR3B_unyoexyzazu22H36P4BFVWLRCk7lEGA/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"30:53"}
        meters={"6,248"}
        icons={true}
      />

      <Card
        src={
          "https://ucc2f7554ba19f6feaa37ed63e70.previews.dropboxusercontent.com/p/thumb/ABEnWM0K01rMOUwdngPm00hw2V1oW6xFY97OeeM2blUb0bvXFGpC1TpwdwapvYs2uR8AcZm-mR7eWKI-y7aIr60JzLtMDcQDeqBf4PMpTINIiWmRLkmfQd4QtPM6_Z-an3AsJpGCKn7Sui2ysRllEKlpMAip327MsbqxZhJlvrL1anD2-mYRjx4euBqfdK0CyLb68m0DB-o8iUwcsIhxJkGsd49pqmW3P9i3ccV5bIYR5WKJgvdqKtBHq9X_O5Ua75Crlg4hqtGCtyKr_fZqcgevqfH7gW87bXMNHveG2AMS1J-BTWKe8pSKsDd-3MheTi08XKh1W4KxcGIVbbj2GWdEyvV-HIG7ImJnDjpMIG5_4g/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"performance series"}
        description={"Performance Series"}
        profileSrc={
          "https://ucda3446287a840b844a91f33ba0.previews.dropboxusercontent.com/p/thumb/ABESkXeHX7IHsje_cJT4oHjr48vIM7Ndv2HM-GgmNpoL1FQpcJZmvuyAWuxOZbE-DX_dUK11pwt3UHWcWO_a2XScZjIoIgBH5lnq4PYf4QQ6bwObjQLqwvKSCv3nrI5-7xRmPkzm1QTygivPv5tW7-MiVX76qoXCsIFBgKI6jqsD3pKs9J6R6GFOL2IXKAODbpEUK1aped17ZKduyA_FpXsQJx0PRUesdkk9T6oQcMMFi8AWejPXNE62fCq3TwVY9I7YV8wMjXw84ozBJt9Ncy5jJQA9kkUJO_fUDFU6DY-KRg8PxQRdO68Af1z4y7uEZSmU1LMu_vmGsAWjOkojewJCXnxY7V8f8CPispx9_WWDfg/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://uc11603dc908ab9b306eb3d71335.previews.dropboxusercontent.com/p/thumb/ABHzD_frHgRGyTBEni_s29FcCpEoxe3DOMJNAtTIDu42Ky6A0Ye8ZAAgO7idFqID_CRCHNWRZ3F91aEUTPtIQi1qsDJt1qwEWfCZLkcSGjqxTWTzpcrO5KJ2cfwX0lfMNlu423Ds5m-Q0PoXAhwekW9gXXmId0jAadhLFfXDqu_tePqa77xkTT4i83xcbsWGPeCRzxgOlk2onnUkGy_7Mc2cd2OiFXYiY76qSPN2sg42YfTsUJkY4x9_N9VRjWvwzY-FL3_1Ybu0GpOQynZoAQnc_W8sEOngWE9Prh0_vWGm0XumGiZ5TA6j0-XEW-B6U0nQ-mLq0SdsNWLeg8O7Qt2JZUTzwOLFppH68G5j7IOjbA/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"slow pulls and fast intervals"}
        description={"Slow Pulls and Fast Intervals"}
        profileSrc={
          "https://uc5826f7051e31e0a02f1925f930.previews.dropboxusercontent.com/p/thumb/ABFA8MrO-qYEfvTpFHtmLC7j8ehll2pfhPRQJVLk1j--fQxhBRFqp2pdaXXoiRPDIPnMWCuL352qJe7Hti_f7XmGWaQi3vQ-6rX5jSnbHyyN5FQh2Og2tdxGBM60MVIpf73LIIftb8PlF6uZrFQOB9ZYFxMIks2dKsdaqhjINeljCLwT-UD29OG_XsP7s5AkyM589zfb-G1cEkbLST1IAZSvtJLGdvaw7J9mGTtoZChyB1LRsKnzgUiatFMzuqIiO4hsy021YvlNQHF8RoN9qwwyHXIH7MgF62uEmchbiSRvaEem0eKJ9CyMCWyVD916-2uWZi-wHI5D2GaKN0fKCYxDAysiY9NX1xmRyYuoKIeDfA/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"44:13"}
        meters={"9,948"}
        icons={true}
      />

      <Card
        src={
          "https://ucfa9a3baf3fe6cf0d0c57e26e5f.previews.dropboxusercontent.com/p/thumb/ABF3RxsToE8aeKTW7Erpa1fzVOiUMuAtCY0gwOJ7zHhhb-C6RlABm0FpTX8adLd8Piq739IowjpJFZZNWXhFayM-HWL_AXtW-O9Hfv6rodE-2FlLBP35UthgMVY_cCkW-BR2F9QSpDk8eHDbmYRjgBbEcdyQKrmgDlXUdCP68VSjAahUTogfZ3t1o8mS3imidftef463QbNFAI-9j--Sg295HAiiO0TyaqtCz1WostQ3uXnyjaVt1-9qEgw1BpuXV2EWmw7qPzsZ7X2034Ens6empeNfGIcxjiiX3qfE0jNFVzxolXr6evifITghE-4N20FB1RInlLTAGWqHye5K1sSh-87Q74_OTChxiatPP8omSg/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"header image"}
        description={"20 Minutes to Toned"}
        profileSrc={
          "https://ucec91807b54546229ebe409b5a0.previews.dropboxusercontent.com/p/thumb/ABHNRtVtI5FHHlKqbyzy4sqwAhQ23lKXPIhutDp2SaivE37behWMovfARqUkMuOa4gaauF_7ZCDClKMUfoFShNIf3WqWsXSQ8akCWYiY9QaKFPpFhvvSAPVsq5Xu6wDDMn-KvQket91vudL8ZKvW5uqWElGVVIdKspu-vWs3wPxrTWbS8J0M1mMvjN_uUcaFaQV1GIP5Rw-8NFRgmrKEgTkyPZuyi_CykvbTJao6h6Zl9N1xamUra59z_0ECVEXucgHprKhPD5Ny4Sc5a0ik8ORSGxmr57jm8y5wIDm6kRE53b5I87kGO2c_SN5MZljE3PiYTskY339DKxzPyRvc718f6Hu0yoPqcKCB7TTcY7_H1w/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://uc6ec16241f650d6122c365b7176.previews.dropboxusercontent.com/p/thumb/ABE7OnY0DVTwvUx57OlLEPMeMUmD_hL0AXXPJnpCuKVi5kNfdCgs95-_YQDbzVZKrYQAJrInabcYIRbTN84nRerJ5AOxPDBay1Gu1i715BOgsZxBk1pvC8eBQlLqP2F7Vh6WGhwjNlEzS53AqWYyMcB1fhvSVNSel6otBSgH5tVzqNrLqaedo9XyURneWPKUGxdKKHHNAoTTryv5pZUZNeoHjRm36v-mC6LeTTYySk3UwRto7fxTjR0ghf95xzYDEUoy84W1i-3kdtXvvfYM1cgj0vN5faEaDcrQWJK-Q_hBrOXIdQ5LK3QDIUWkrFQ2sASaax3BpjZS_vRwfXoNYSbbO7IO_4SarYDnh30T3VwRFw/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Charleston Race"}
        description={"Charleston Race, Boston, Massachusetts"}
        profileSrc={
          "https://uc0b40a30b69450ae6dc007bb5da.previews.dropboxusercontent.com/p/thumb/ABHXFJ1MrnepkosKJuZroypp8yZ6zDY4vSDXj45DutAWe9LlyZ7Uk6fnDMS1MZedohIgJT8RxfN5Vcfr6I8_8J8YQZOAOaKL9aZu5HXVojH0VOjz1miLTx3C0lULyUvxfw87IKpsFnbwCzzQ7tV1ju4Bhn1dGRJ8OH7XiHaX0zc2FlxFYQJRHe3wJDLFSKb9odtuK-2_GOjkhhYb4PNaN2pPG_wAJ6E45Alu0OKQt7Bwt8-f2eZR8889L9iMLMwS0ik9pI3dOVUdeB3Vwez-lLHrLJYnUOP6RKKQ6AiOoHEhPAMlG35wcDFg2pgalJQTeU7QQedIW5H3CPgOoemZoHhMYMt6nDyGrLPAirJy-2VjdQ/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"36:22"}
        meters={"8,648"}
        icons={true}
      />

      <Card
        src={
          "https://ucff9a44fbcc9381e87b04bd331c.previews.dropboxusercontent.com/p/thumb/ABEtWsLr6ocbzexG4cBLnnN_yJ9-Ygkq9lDnslE0hm9hejHc7du46BE7Ms2sNYsk5-8COtWJeQ7j3guJSf2jznj8R2qMXDXLb57LmmNuIKz3WJcuF8kF4bGEtalvQOoxVr5lC554vKFbf0WCYhweo5ihWfg33nPmzHuGpVSf0Yh-P2J8-R1IFJDz0PvZ7cbI-iRITVuhZS6vSSF5YXH8fMi3VRrL12GqqI-D-l6HZZNZWxasdwIdnMgw0zDytIiBQlrTkoXlUB0CRSGPjrP_whdHKDpc2JWRs4vnIkvVwrmlaSDgUeqBgsMpknAIqiAxsVHsNV7-Kdx0AciViy4tON3pP6LdT3zat1Fj9ui5qV9R7g/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"HIIT Series"}
        description={"Full-Body HIIT Series"}
        profileSrc={
          "https://uc15d678cc458ecad5c415b52b7e.previews.dropboxusercontent.com/p/thumb/ABGnfC4PM6FofqisWaXJ8in6iUcNdJ-S473K5mZ7XaOlXW7UgbWnQiKxhpgHZJ_w1ThfRjPseSZ_4VwDujHTFq_yh7fTJ8xGQfPLIhw37Lji1F8DjMCgZDTvfKFFYkmgnh8Ojd-N2s70sLCwFEasxpK_ofkzxAeMM-Exsxh6c827y0ztTw0toUNR7VrjyFBwcGQ_y5HeOUQo4sx2D30L1OlgbshDjhtywqk1xfDtQ_r9oq90jAJBunethBvP2T8YV3uddM8AKKyJBkWmFbw_8_wZALwx5zQeWl-n437c6X1Wy3kdW7frbe-L0T0mV-7ulmkwAQu8BQSC6_MV1jI4aGDAgjsGl4X_MfIs8g8DYmqxrQ/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://uc8194e10c1a52cd8b2e4578aa0c.previews.dropboxusercontent.com/p/thumb/ABHRE6TnIw9Wfc723hPV38X0c08RLST9u6799SBv84qRiO1Mf0EIVSK-fcYydQC0x4kJf5SHtvwbNuM4ENUJ3PbRI8OWBVv0GNHzNseFpvh-VYtGqAKL2dVxezsapMYmANEASqjyR6xKICWaJM1mptui8dLOL8jgshzpY8Zrz462K1pPk97v0u7xKeZsU63qc52ylMYN1hr8sd_6xcWtGUrDoNT5Zb9aNCzRvTdYe1GmrYESGq9ZXbH302HuJK4MYwktXetuKY6bGHJw-BpYQOTLdfiMUIvPHEjQWdiDalzV_tbEcs_CTYDfB8JXh8dkx-CyMC-Hy-vYjP_WnqQD8Mk_imOf8ycoTe6H3B6Rvn6P8g/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Kafue River"}
        description={"Kafue River, Zambia - Power Stroke Pyramid"}
        profileSrc={
          "https://ucc63ec9d97f98dafcb3c3c62303.previews.dropboxusercontent.com/p/thumb/ABHhwCIbwQVTTz-HC9lqlI37BfnTkEAR4I-m8zNIUmtqJFzwV5X1zR5i54L5sCEwnL9BE7s7IdlmZipUSYLQY75i0zlTauPdK4AWsrDM0464S2WDFw5-8efojUj5Om8f1Xq3v1ZnJDjVu0l6_s7TOTrRnYhQbwwGnII5XXtNQThel1lMi_dV4P0IXVKmguZtP07T_YbrQov_YZAWS_PqkqqtkdJL79PJkyfhdGS_klj8crUPhulQomDTg9rJRn289-CbjF-sY4fUa9TUa04dbCWzQS8m_CbYFZQTBjns14bgxYb1q9UutgkSJ--Y5uHRBwEJh22B3IJij9HU8MsJTzcKuWDAIEyWHxOeAJ7inogAsw/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"22:22"}
        meters={"4,660"}
        icons={true}
      />

      <Card
        src={
          "https://ucaa578c634771d40661eaba0209.previews.dropboxusercontent.com/p/thumb/ABEpKUIT-COYpHvB0qRI1dftDJclZRtAyD-0l9iedmQNfEzo7nf2aDDl0QmIf4HtmLNfWsHKszbKbUQ6dlljq3r6zfDHTYPzZLh1KuxF5nkBthPBky-6xZWtk3gN1zYuXab7KWhgWnaCeU7uLQ-LdFMrSYcxdI5Ucbh_kppTAfZ_hECb1GC0jn6ENV3kTehOJO897PtOSqZfQB4AyECWZaFU8SZOkd0rUtOZAZpaFJQLzUvGL3oD_gwaGzPrhyECfcrRqVkkAMS6Lk76awiSLrT5OA2gMitmt880ADI1tb9HaQlLjsANAsVt-HmO-CqP7reeOnxWueliEVQ31pXrBiH68jMXn32hVb6v74PxJCZXXw/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Shred & Burn"}
        description={"Shred & Burn Series"}
        profileSrc={
          "https://uc4e5de5dfef85652572e9dbeb23.previews.dropboxusercontent.com/p/thumb/ABGHzMbcbiI0o9j7JwpC5qWE4dWHVAv3MubF4fpp48T2Rp419aPLNSnfG06_0NaSOOrjWsNuLKRvAXK97n0LCL4uiW6LEQfno66sr-zTISoH67PCmW-inkdAd43pCkAwMkN-F1ojbpzbUwLi8l5lKR2SyreTG41MPxWoLiG3fOdvb0mPwsJqG-A3JwDaSoTJJtsCNTLHCsm-hlmGH2GaiH4Ux7NjCP_jUAQs-QEkSvWXOub3pZLa_7C4Uy0S8D9PY7j11pJYn81HP0G1YS1zXFvID15a-NMAY63fQMs5JN5uRMNyiJ5c6YpqL-3L585LXxRcIW0QaEjf_hrj1k6JPLANxfqXXPfhkc9ivr4s0B3tHA/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />
    </div>
  );
}

export default Cards;
