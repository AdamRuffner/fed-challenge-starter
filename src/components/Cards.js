import React, { useState } from "react";
import Card from "./Card";

function Cards() {
  const [icons, setIcons] = useState(false);

  return (
    <div className="card-container">
      <Card
        src={
          "https://uc9dec2270196561c7744807e49e.previews.dropboxusercontent.com/p/thumb/ABGhLq9P0EO88QAFEhU5XHtaRZj2QKCOMS3BsZYa_XDLXaRfNxAMB3BGmQ45I6KUMpYLBmUAvczrocIzIa-pjQL4F4s61anvzf12tE62SpVgvSYXar5i7KP2Vf_lVQVdiqiLJJ14SUiG9RBiuYNpwEdqcJ7OGlqxUT3KJF5Zd9xbG3YikCdD94Yp9gnTuo4tMbbwu54SV_e_DFmQsvHaLlixXUnMJh6V_CjbY7-RTeO1tpnttUJ14kIax1d0E9-LlAHkb_wylEyySL9ku1qjCppIT5-kIS290Lu9YV8JYr_YTbvTbXuD-Bz7pEdJaoT0I1owUxCsBKIbZ4SwmeRBtKxwVL-RBG9uU-iQra1bcf_pIA/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"lake inniscarra"}
        description={"Lake Inniscarra, Ireland - Pyramid"}
        profileSrc={
          "https://uc1c92712322452cc26a36cfd4d0.previews.dropboxusercontent.com/p/thumb/ABE8v79DnXWrkKPrNoIDohU5Gg6o3_5aiI8JuBKeul1wzxr03AZL-dwoBkWttnfmoDSeYhiG3y4p1eTkYpDJef55Kkb_xhdLJAfDIlHESS6dU5N8wiF1HOABuhlUMCCruSG6FMRAz9NJf0hmDt6Ug1Xq_gA9--glV6j73HUmEJrfvyV1Jq21eBnpkCjDsSVIBiJCDA4h6MVH_xKD25-vRrBor4_44tCUjsheInQYXc3tSR7FHzTBThy6w4hLONgJrNDlVcKOaMHNKQ44egskTV5cXMQoMid3S_pgqCpdr2VaVDnYwVcBLXlrSgxUEiCVEOXaBCalV2Tyw9FLDaTzD0MX8qMiMuagn-_F931QnyuiIg/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"30:53"}
        meters={"6,248"}
        icons={true}
      />

      <Card
        src={
          "https://ucdcd18a7dc49b2b1190ffe0a5c8.previews.dropboxusercontent.com/p/thumb/ABH8Ru20tfvPXXNhixK88TP4Ay7ATlK9SdF1T_6ILmHbzvMGx0UCTlSKtBIGSArna0sKnYkup06kHpmF-1ohRNjsIHAha2gpon06iror1h-9qeyvtkuZD51TIK7OPiJJ3J9oNf_mtY-IZyx-kZRLTZOa_ksWPMVIKGdnPOD53NDT9Yf6Pd6UFwPXD16VmFNv4BJfWcq9p_z0anIdaPU4UMbynTpenVNXrQHvlvwmEDUM3pGukw9JJzfHAcbHg4yhhizk7z1JnO5ceJfSd6IYpAqvKYX4fpSJaZ3G_butLOr-a2fYp9nOZYaL2xh5lUWJyWvJFJexqqb1_rM7-vUiNZyxXvpbKZjqmVc6slVagN_oHg/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"performance series"}
        description={"Performance Series"}
        profileSrc={
          "https://ucefb9fc0f17dde4eedd54ea96ae.previews.dropboxusercontent.com/p/thumb/ABG7N4FgChONbdtzE5bLE_cCwZebdXD9wgYG_sHaX-3lpwxlfBGZE9ISQ5ZqRD3lh-BeGW-9bVgOBfjI_QvGiD3aovDeNAG_ODKgMTJjfVAXXXvoepK1cc41RAjfFLeA59VlU1JsA9fD3-O6K0nUL-UpbA1vRiYClJzw64y2mhAKSBa_FbmLGlp5RqJolBaGAux9kg3H9MEMAoFkhPZH_WqY9ZAQqWr6YOnjmJSfpaB8U6pHYito0ndjE4TlzHaU2f-aIyKDZTb0qRbKdZACDHTPfZuB657qzslxLbcaaSF6ZIurfsTvPzMXGjqRPEjaiJJZrEdgypwsY-3rTnLfjrWLC7iGLsKgXiJ0PWzlpSBhMA/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://ucb7c5b54ba7b3f17eae1f8b370a.previews.dropboxusercontent.com/p/thumb/ABGM7hD56sVFGomEJMhajBrgcSmjiFfeXseZFYnELzbWY8GwkydQxHtbBqw40foYDXO0n55xwxD87h2HGMOg_4f8aFfgPASGsFYfyoXiEyQSbZga83UyM5sdkm9aNAERpgfGs0A_TOEzCEYrYwnKaRwA7VVmABS3GoLcDiFlUHFHTPV4DdB6q1roK7UheUqX883B1Dk_xvIQrMeLCQyEJCSi-JVeXC7azbOknOt5D5xszY53mXn48ZxZapSI1la51zTt79bpay8KL9b-I0VUuWpS4pgUCtttZcwJndp1qm6SZhm8B0Ltw62ZH3ARPg86U7kL2queHxZPoheOfuCGGynhxS0W_uiGfoExVLvCa5m_0w/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"slow pulls and fast intervals"}
        description={"Slow Pulls and Fast Intervals"}
        profileSrc={
          "https://uc95fa7808982f4148d2b267fb99.previews.dropboxusercontent.com/p/thumb/ABEpfCTtXE56RdkG430rOgdrRrEO6twKELe4lNWJ8k-vDY1pPTLLIEt_Q1KorGxzidF7WgBI-ndw1mk4T3I78qPDhqigkWGEADO7EAnjQn5H31qWWoZSx4MN3diU_H734sfs8BMCQ_CHB_QPh3BgztIMa27JKsUGC5C_4urRht277qywsEkxrQ1Mwuqsnyd4mgs2qyZ4m0YmKrZJlFdbz1CZqejOwzIPhroLasKgosvsfEgGPqFUvJp_swkshxJUFZOf7KUoRafuNe8sT7j-UZZxd_8daMyoceijtXOcV_mGORBEg3FFxh_-0GILAVotDb3bdMLRN7trt1J84HLIhsrLGuzvXM8mX0-FTiHILGuFTg/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"44:13"}
        meters={"9,948"}
        icons={true}
      />

      <Card
        src={
          "https://ucc1a61782bb868c9d1fafebffb1.previews.dropboxusercontent.com/p/thumb/ABGW8oIw5YjgIxz_SE9WBe5Lq4WhzwdRdIfOpTCHWqr-ghqKeuOjnm07uTWe1hv1G9cIWU-87xVEf2a_mIY_Sc6zFogIr3j2oC_Y7QU1fVWYNj1V4e8qQAUCJI2qdn2GKc1CqGYDVPTJ-MYCpfi_e8Rx9S_BJdsEhDTyphf3fZwBrK-mvJu8X6lx-TdP82V7g8etANY0HQyJ4URqT4ivBOuOjp9lSYLccM5Edwxbtjh1u2gakYcuRAt0QQqVQalbJHq6rbju1AtN_MASS_ICtkRsDg1ADTwEApBBqdlk4tL7xA4HWYuV5nO9oZYKIXBQcHa19B4nTX4FWSnScXKS1eOEzr3eT61lF7xKJQjsdieMIg/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"header image"}
        description={"20 Minutes to Toned"}
        profileSrc={
          "https://uc9382d99a4e572313540873e561.previews.dropboxusercontent.com/p/thumb/ABEwTBNjpjogeuDe2IZYCKGKaxGwaM7aRW9kwuT5w8yOwfuu6wMAQzE1yBuvWfexTEAG7zWZE2MUlCRlmBx4zj6w6J8-9hh1Bg1a6ZBc-yBElMWQOcvXAYWXIE4JCg9VvQpcKNZbGKt6bdXsOl4U23RBUgDQBg93FQTgNYz7LOowVkQoTVCGhypiGM9vi51CcHgYXkPGj2XTKNfEBFQAUikQrK_sk2EZtg16wB5zDO-d2SIKSntf4UZ3bpkRf_8eOvagak4Z1x_7_BtkIQJIi5tCb_DdZRZYhlyyvaBfQjObA6a2qS8knPrgIA4aAxoHGl_-L3cJw2Px8wtaMRuS465aE8VbzD-OBQZ3Mwtgm0WsZg/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://uc8c50e1e7cabf32157d620a6c9d.previews.dropboxusercontent.com/p/thumb/ABEWwgSt5laXlShqoe6xbHoRieY-ClSVTWzSk8aHNaUF9PdCYZKBMb0aVJ1pBZv-zuM-zpjw6aSqZwgwXaeHvxf2201sJ0uIYVweOwnDOogdmFK0jBeojWxSBMLGsnfleUZRRjFvUIriDOuSxkbZ2-DGYnIf0rzYgZ5ohrRMZaabHwdUWPgHYR3qZ0P-6YmwY-6FEd1w_C_JiZV5Xkl9qpLPnUeBfUDbca7BW9u_qUwEUSKdcJDDunxM0Qt7Xl3nJXORGjH866HOlTn2LhqCpHTh4uFQPnqrW_zjP3mq3SwTaGz7IHW-M4cDl1_kwJkqM8F6NCFDLqE_Pobj9aVcKLWN5zqWnszeot60WrbSPvfROQ/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Charleston Race"}
        description={"Charleston Race, Boston, Massachusetts"}
        profileSrc={
          "https://ucc5d3bc832b958dec203f3ab4c5.previews.dropboxusercontent.com/p/thumb/ABFfaTI-rb8c3k5zxgIMGOg03Pv5m3Plav6hEF17d36XDWOJWOevRK5q-XGnTTeqbO6SxkrPJMKnOJC97Y7rXBIsqk77KBowFU48RJvnlzM6wdL8-Y3IvF4YhjHhJfuuWRvGl3HMkb1bVd_aB5Ucw8oQX2GcF-TV71ZJ6oPYaww_oyEXuXHAtG3ikpVZyqdVKk8l6JRdcnoxcy2yqNBIeuoiOfmmVOywzaWwfJGVkdlZ2p_j55xzROk1Q-2MuoifdPMqXeaflCT67FkZpXuEV3e2AFug_kSyuB23l3u4MX4JeSOlFiERaoWc6HMYfobLu5bEIEBMFPr-wijXsSsAiSNAil8CcjV3h_7j6sn8gfy_eg/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"36:22"}
        meters={"8,648"}
        icons={true}
      />

      <Card
        src={
          "https://uc8bfa738566cac00c4da717f62d.previews.dropboxusercontent.com/p/thumb/ABGK3r-awCruobP2YHw3A64OFh-37LK4JlUGK6z79lDknE-YfAcH4837MXTaIlNtS1l6RC9DnxmjYqb_WYwnTk8LuS2cJ_Z8vDHyPGI-5FVFQitC1AIuv_DHI0rdlsUJxJnEQTFCChUdnwMvs49WbQ6Qnon9C4DisuHNmru_22yFWIWlSp9p0GG9uFVTSImuPicBrV1nr-DqZArbPnTRoFNWITSa4AFCM6urh3sFUeo-DIYKCqgMKuQIbkVEs9cazJD4RVuFDdCUh31cFzC1vPk4bHzDajGzyyunoe8PEbyoDwyalc9kHxXHZAb29ReR6g8LpVrEtIHrn5qVtuokyAA7XXa6OQvoYFWunxdzmxHssw/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"HIIT Series"}
        description={"Full-Body HIIT Series"}
        profileSrc={
          "https://uc55f0b3aefbf4857e4a31f0fe3d.previews.dropboxusercontent.com/p/thumb/ABFn8seYK2cWAY4PqGDUosq05Iq6p5o7qidUKTDIuWDlN9VkxB0KomaWPQJRX2SSvbUanaEeQCV_0q680vbONAafBXNLTmQC1VYiAGGU3zT6l8wxjUGUxKMAs55Dwn4vxH1y7M_3KhkUzRL0XFWmWWYEFC3qkxI4GzZP2yOudHyeSvs2gTroWpGQmxfTPejkFPl7AvedOQS0nFq3v51mPZG9t0nQPEtcmNUKy6WBcHKximgmM_gPaMAu61ajn9Ymkg7RTPEUhjlpmLmJhBLTgFsSbhg_D5OXe1qxDPPnQ0SqJrwnZjqP2bDzulX0dmBN-o7UsEKIz1AcXqaP60wziiU1oWIQ_tyRgdyYak5-wJ0P5g/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />

      <Card
        src={
          "https://uc1fb13d648d0b3868787a5470f1.previews.dropboxusercontent.com/p/thumb/ABFLtKfMaGHJnFoYE8gy7kqMGuRkGeqx7sr5F-kcWK1akOT3A_FJpkIj4PbiM9o6zgt0VPqTvJ8_YSLeVVW5OkSOPtCec-UhzsRq6CNEuYD7VXezdyKFnbLTlJr3M22-rvhjIRk-vDVtzGn1vcLF8BVQhh9S3fx7L0eeTbVPGR4C4b4zB2oMruFdYC-8t94QUijmpRNz6aXJpV_Xx2ab5VIrywsyvleD8TeAvLI1L5olf8aHbjHCZbAdLeaJscCtdiBaLUA4QHMVnKs5Kb0dMAbOmd2z76CasD5jE75wgH6QFMKNN4w6tyWQdUVyLo2_Qczs0c5HQ3XbHsPCTpzkO_CpQTELDjGQQBVXkY94gudlEA/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Kafue River"}
        description={"Kafue River, Zambia - Power Stroke Pyramid"}
        profileSrc={
          "https://uc0193d69478ef81295f636f1a56.previews.dropboxusercontent.com/p/thumb/ABEtd100VYFPe1VJJCiI8jqiwqjOuG9Lidu84YMkm8kjbYDqPrwVmo51ylJTEXXXMz0ZFmZVpafJrUl4308VAiWSPaNQfQhmHkx22ClVR9qbsNd0JgPHqmvJfZ_o6qr_bA1dafbPsfd1Dxmp-Ehzp5-x5_ThwUSGQ9IUFKWlfC_C6Nd2Ji0zvrP_SvB9H2vqdLkS8pws0bspKsVbBbRQHq_kUgjk8WWRx4GxM4_tRB6fyll6BNHSylUB2ma-oks3GMIMx76DO8ODE2SSVZE8eR-XYy-ZEpoLO-O8QMwXRGJrGXBM19EgQKNy_dp-05aHkhpBPSEBC6QJo-8H9VX3cnj_bd1yOFKesor8EW4983r9kA/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        time={"22:22"}
        meters={"4,660"}
        icons={true}
      />

      <Card
        src={
          "https://uc6e1afe32f78ea07a7f6a2d1788.previews.dropboxusercontent.com/p/thumb/ABF51MK5XtpfTgYwbC7NOYYaJ5pWdgENyvMro19qGDrlVBEwx5tbDCsdxhlDrY3seEog-v3J_no5gRoXeQW6KYTK6hUMMXZDj4qbzZEpw-4_eOYPuB6LSJ3-Ryjxn3RB0Ji9i535F0xWfjR1eac1dTi5AdohK5Bqw3AkiTXdf-FuY5pGxjUOLyb4BdVPGOMeERsvI0XCLAAYImdTlWoFnb1OJGGwuRsu1e3CdfnLbtp2E5W5-as1f3Qc_O7VaME26l_sujIqMLPboLRxdZ9SlOFvnlzfOMNaBrxDEAbx2xMBqJlRqqJ4m_S9grFRwKp311OZQwR7m6ZSuzSS3KQ_VdGgaD26ZX9sSZDRSumw-AEvyw/p.jpeg?fv_content=true&size_mode=5"
        }
        alt={"Shred & Burn"}
        description={"Shred & Burn Series"}
        profileSrc={
          "https://ucfad352528b9a4824c2657a23de.previews.dropboxusercontent.com/p/thumb/ABE3639kqAk4Qkh2kbnQcxONXn5a9fErn_VIbzClFIjelpyIeN3Dq4YqkmtM2KZJbmBWC_0MYO57624q_ORo4Bbs_BtDIEG4vsTgCxrhAf1bedaUT0dIVHqUfdHJzCcO9GnAmLBL5kUD82XC2ShCQJ7vomUKdRiASn9CnYKuM7DlqOmAF8PO4F3SLuJNfEGrH97jKdGwlkvW4f0Gxhx5NAPkQzqaWyTH9x3xzlOPkDZjhqoYZrR3weesGtZLNzUTcPhofNBD2vC3jE9IxIKrtW_IuK0BhHtOMpyDdAyWtdC0dU98QDHxrqPo8euYKhUJFVL7CA3XMnmyf63k4DDj_TZxgcVtS5gWN_wfdiuPTzPhow/p.jpeg?fv_content=true&size_mode=5"
        }
        profileAlt={"instructor"}
        icons={false}
      />
    </div>
  );
}

export default Cards;
