const titles = {
    tag: {
        music: '音乐标签',
        sheet: '歌单标签',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzdJREFUeNq8l11Ik1EYx//vnE6tWBlmYVRoqVFGmpJgDLPcNIsU7INB3gZBF10WVERRdNFNEIGCXkhBVyXGxCUploUhWZo6TLKp4Edi6fyctrf/2ZfonM1N98D/nLPznvf9nfOe5zzvMwkBmFxwKZ7VXSqf2kA1UUbqjWhLryr+ertXCgB6lFUN9h8YxXn9DEJClDD3/Ebzpyh0tMdjzjrO62+dE6nhJHoCBjuhRqSmDUFfvIft0CVDrBgf/46Ob9OcSCwntAOyXM/+Yk6gzy+wD1BPs9nGYDSYUWscJfi46FKsO9ROUaihy9/NOovPEPdBuWZQmw1ofNeOluYpqMJlnNTFIn5v7MKmSmokJJph6tTyV4lyzaAP77VheCjZ3WfqAHLzW6E7dcjdl5E5TLBOgBU+Q9MzBry+3g9cqQM6RF2mHtj7awyJmJiYdY9LTIphmc1nhih8gh7T9OOCfp/XPW35POVs3ZKqnpdQN9iupier0GVaOEahYbsQvU04dLrCJ2hBUdKKjhjOPXWY3XHkM/oQVjud18IWjc3I7GapVQQMFZad43Ki64QaWH+hkqFUDiAhKW7R2MMpKpY5ioChwoT3CkeSJLGfedRBO/TqNZ6bJf4bGblJrFsZMNRlwnszNbPo6jRBFRFGR4rzgAobGRlluUVaE6jPwUCeweNHf9DXWycFFVpeOsD4HcVfqUpC0+xQbZ6ZSsZ62AJ0q/BoxusfYmVPGN5+BhHa5IrV6cjJ/RVMqOvrNArZNh9MqAtcjsqXY8GEusC38fG9BcbqtlU93GoF2r4KyKqhdjAviACvJXjaAy4e/uIZMDjgCS19CpSVgCnOqqHuDIQDxKvWESwtgs+JVbUCdbULd8zPOaDdXUDRRUCtXjXUI+fimY62Z4baPNl9vCwWkboADXVAyhHgdSXQzrkVngM0WX5Bl032loXPTAN3bvIVzzqyjdNngRNav6Fes0wnvJHgGTe81wwYqvixYyaTqQkIumJ6S7j4kNcTPLVsVAsA+t+82itclqcJHfQX6lNC74Q3MMuYoDZictKCirIY9PdF+Av1+Z8E4dtZ3acKqc32/QeuENrqb3D7J8AA/UHFWejEbEEAAAAASUVORK5CYII='
    },
    intro: {
        music: '音乐简介',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrslk9Ik2Ecxz8TDyN2cEnvDgu9bBdBsc51miADxenBQ7AFkUdl1qVLhyxC1KToYBe7BB48qKAha5FU3i0bKkwoZkLuoB52GIjO77MJSbB8N946ZD/48r7Pn9/3+3t/z+95n8dViERdwD1hULiEc5YVxoWR2qKA5XtMezu43c5J5PMWicQw2R2MSJxYDBobcdx8PhgbHazRq4Vl8UesxOur4S/YvyNSW3bk0wqsrcHRkY1QFWtTE7ReqVBkZgb29uyHu7FRhUg8Dt+37Ytc9leRrov1JfyvLlvp2tZ6bKZVXQUboeofGwiC31+hyIsJ2N+3H25dHTx8VKFI7Cak0/ZFgsEq0mWcfuN4PqvrvIoUtGe+fXVwM/5qppxnZ2ErAw0N0N2jDRhwSCSbLZGnvpjWvPCcTGaAZ087aGmBrghn3RHKi+RysLgIyx/NwfVZPXdcc6/enYwmdV9rY3V1nFSqmWvXIRwGj6fsmuQ5PPzZc3AgiiQMPYAP739I4LZ6r54SKJrab/Vo1Xif5u0U5xs/43+aS/wuRTRJqO0WoRCsr8PrBdjdzWvwiTAsstyZ9RCJek5uoXfxet10dJaO4zcJWFp6aUQuFPMMN8x8YVq4L/KtSqtIXKoIhoRe87HClNB/LMAANqmOuPz9PXAAAAAASUVORK5CYII='
    },
    sheet: {
        music: '包含该歌曲的歌单',
        sheet: '推荐的歌单',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABI5JREFUeNq0V31MlWUU/72Xi2h8XOAiEA65IKGCoQYqqM3UZLOlfbnl7Bq0ictWlKtlX2pf/lFbW5a6PjczRs1mm9nWlsNqKSHG0mryHVdYKirfUNyL+PY7zysB417uexHP9mz3vve55/ec5/zO75xXgwnT9xRHo6tzB9rbV6OtNRGdHZPhdmtYkANs2NjFLX9xVXId5fpGS436159PbUzA3Z+lo+XiftRWZyug8AggJQWYGgeEhfFzKpA4feSfDn7Rj5YL9YiKztde3XoqYGD9jfcO4PczTvR7GNkiIHcJMN3h/3pefA7oY8BWK5CadgTVZx/UjpRc9QvMaw1DY8MfqK1xYFY6sG49YLfDtAlwkIWeuXq6gYRpF2GLzNTefvny8G2WUaDVVS7U1Tqw9gFg8xOBgQ6aLRLY9gqQNgs4/3c8eVGnP79rqk9gFWmTy45H8oHld/PUGsZtwoHNW4B5d4A8sTH60/qaDUGjgFVO5XrX3A9kLcCEWBDz7GQQqbcBzU0JmJN5cASwYq8QSXJ610pMqCnwx4BbQiFE03ftmT8UsZSMsHfdwzd2vT5zbgPuvQ+4SnJ3d30sj6xKHH4szUb2QhIpBjfNFuUCly+RcDPT9fr2KValSCIOuUsDc+R2A+VlgIui1d9vCEnOEt/7LbxcqRRgCtdaq5LB8HAgyWEe9MJ54KN9gIfgczOAiMnAyRPAD6U8hMeMh1VWpb3JM8yDSnSffABMo2y+tBUIDzOee/h836fAsZ/NeMmyKMGPjTMP/FuloUjbioZAxSYFA08VAvGxZrykWFR+Q0PNA59rBGayOUTavJQO9SFr3tj/b24CSg5EWG4Kg0NCfP/WUAecOsk6DgnR0dPje+Phr4Ezp4e+Cwlr6oGOztF7BwbYlbk3Kdm3v95eOZhuoaD3qfryZteugTUOHP9p6Nn8bOowq+Ct3RSDYQcWcr1PbWjrAO5c5hv4Uos0kT4rou3NbA5pPmtPOo2UjxxCvgeTRJseZzntBQqfYTnNMXrvn1XAP+zDBZtAn76BGxtYEYnNFkRFfYfuboM03iyDjnsZWWXF0LNbE4AXtgN59xCMkbbx94WLWV47gdkZYxDTBYVFTCsibK/zzotQdkLzmpsVq4CKcuDQV0AMSyU55TqBKBrLVhjLrJUdV/kVTIv2pLONDftXFdGVK6M3i36vdxoqtfddzlQl0mWA1tbAmC6+BYNYgmmUU1x8AYIn6Tj0JXuk7kVn2J8Ltxj5/oXS+CHz++YO7wf1OsDRp/gWDMEaPnOpQaCifKNqXyvzvDsYYFurrQGazpFsLJ281Ua/9Wel3wPfHiYPcj7Xthc9OmrY0599rVFNIc6CiZtCKjnhFu+XdujS3tn5P4lGHjd5xu1we1zcaEdHu0Gs8Q4Gcr3HjhqRJiW3Kt/mx9vZwEMcb2NiAieS5LS6SkUqoCRUT+ADvVz74qVjS+FgA5GSkesVImXOLR7M6Q2+wlAqHazj2OuvMGKi8yKDMomIOEidSnmSvdrT+WfH9e7k96XN6ES60nuRXlFBioPSBj/2nwADADFGr44E6hRaAAAAAElFTkSuQmCC'
    },
    guessLike: {
        music: '猜你喜欢',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwVJREFUeNq0lltIFGEUx/87u0pCPXShICMvqxGWD4GVt5J6N1KwvEARXdCtl57Up3owNCIo8lK4YA9hZmFJgc9a6iamQYjYrrQZ1UNBGra7ra3T/8xstqur7qp74Ow3OzPn//vOfOc7MwYEmJpfqnAooZfRD9A306fpw/THdKvheat7Xsx6DuX0Qno6Xf5/o/fTWyWOMbP/7jcEBKZyeITEpH3IzgUSkoC4OGByEhgbBV52Az+nPstkKNDtjznCoQ0bN21F3lEgJYW4DYCbc3J+ILIXmHAO8Z5ixtjngAw0w2i0oaBoC3IOIaTNzAAd7YCtT2ZbLWH0Wk7OiMIiwGgKHdfbAzx98h0+Xyah4wbCBDqAEyUZyGJms9SzcWaDA8DUFFBUDOxO+y9g6wM6OwCFYfkFQGY2lrX+V0D7w0FZJpP27M2pOkyyaG4C7GP644zfAayLCw4WwMEs/4IYEJaJ9tBgBhz2QpNWILmH9Qsvnumw3DzgGGcfExNaIFxQoOWQ4bCXCTAbZi62hwvdy9STzdDWZCWiS5kwyJJtsE2rLKcT8P0B9meuPUxMGGQJ0KOVcYxJr7SdCYiKubXt6xGgHZ8+MmVuwxu3gO3x0QEKgywBduF1/8qLIVwbsMlvlwAb8HboN8Yd0YOJ9vAbr7AU7v4JqGoNWpqBr1/WHiaa96lNhrAU/+lr+DV9F4231xYqWqI5TW2gZn7zluNGdphylF9itSauDjbBbXavAXC5BGZhdtJ7ocw1D/2EheV7B031esBqYKLhctUHwoIynPeOq2MPrcQFC5CUHBlMXkuSmcd9naCqBV1xsTgNGhtbifMVfM/tCg/meK83f683JCzokS6YiQR4vVc0AREKH3Z1MdiSGQZkWsVMa3H6LJC2N/RNoyMsfavAqgmrW0ovrNaiQY2mWpw5B+xJD7448g5osUrjXxYWkRFqUY+fUtXOHlV1/NBdjuVcfunFcHUMEUIroCiNOMmPOoXL3/aAmfmk7JuiAvRDuZi4STfSLxNmjST+rwADAKCDJYeCtNiUAAAAAElFTkSuQmCC'
    },
    topic: {
        music: '相关池塘',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwlJREFUeNq8lktIVFEYx//3ztVIzVdqkyWEIEhFRpEE0YM2YaAZRYvCWrhrUVERLkp0UauoRbRpU5KEqURitiutNoVpCmpqgjo2M5avycekMjOn/5l7J0craJw7c+A/32XOvfd3v3O+xwFCGKLwdCZ1AWEONZSblcYnDpodUYUaYzGqUC6tIh2m3UblR8vTLdRnaogqiBY0i+qmFgzP46m4SEO/UynUJmqEWkMdiTS0j9pJbaXaqBkqLtIpI2ieUemUO2iPI5syBLfTNFH7KQv1M+R3BKXDIZpSat1/PptGTRpef/vLvI/qp15RzfxYzzIogQVQlCYkJQmkp6swY3jJdNi9mJ+3wKI54PWcJ7hhCVpc0oqMjN24VqYgJgamDR/Bfb3AyyaBwUHJukLwnQB0HAcOrseJk4jIkPCqR0B7m4AQe/WlVJQpuN2RAXZ26LbkLJCcLKCqN1TjS0YwPR0ZaH098KIR0DRgT77kHQ5Anfjh8pkOFExr6UxLs36dkCBZcZoxbcPkpPlejo8xipkpQtWhExPMbMtYID2+MLRVzM6aC7XbdWu1sgwRZbPJQPoUgPb6fx12c6H9/brdnKV7av8quLwfA9BORrDgl5gL7enRbW4u+xMb1OKi5HWoRj2do/vt6O4SpgFHRxmxLM1Fx2TUgsUhMNOqLZUtbx0GBnZhaoodMyV8qNzH6+X6tcvFFtHoYxB1KM8fD2lBtz2kbuJNiwXFx8OrPvW1wFq22cREwOkEPrz30alZzp1b1mX8aVV05gFUSykqKtVVeytzsr5ORqtb5iTtNIOojqrkNo7AONmdos00HtlAlSE7W+DiJYXdITTgDA8SFeU+BoyTkNvGcWbBmJWtrZpgl3xrzUqPMWxT/Hublh568MgIFUKeoe7+44xVq9GbLmy0bsflqwpiY8MLnpwc4N79P/9/9xZ4WvO7Hsjl3cd1f434BA15eSpSU/UAWOH8qsbcLPy5L1saDwlKQ3Vh8Mkhh3+WMaSPwuOxmlogLNow628Vr25xP/37+0uAAQB0aB4nQip++wAAAABJRU5ErkJggg=='
    },
    musicList: {
        sheet: '歌曲列表',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAkVJREFUeNrslslrFEEUh3/lzDgYJ0oUFMm44EEPYjTu4n+gxICCG3gQJSKSBD1I0IuiePEg3kTQUwhxAQ+ikIPoKYiinswhbigeXBIHXIIMmbTfazpmxOmWsWfmoBb8eLV01Vevlq7nVKXktexaiBlAZ9FRd6PHK26fpOqlaSiNutB5JpKoFbg4taFu4JPHK5IUTmOXxhz4G2pnOd+WaLuIFqAdqB7eNr4bSVI4HCxJ3HQFXS1R/wVtRD1oK7oFvNXAc9D0mNBRvHgT1khbHth222u0D/UlqcyRyVV7k+EUgNte2wSbk6phCq7UiVqe6l/Sf/DfD7Y/1xPsvDL7DXJCV8YCo7w9JmX2y8f2mJk3/1t7HPOxT2E2o5bghZuJ3qF7qL8qYKBb5Nw5eV7Wr0gxh7qp0udP8zU2toaajoqCAbognOkELK3fIK1D2bnyy4VR6fEj6fo1TyNfXSU9PulDG2ZIe/dLjdmfWxMMuQqHCwWn3u7KeIy3yyxwUyZDvHFIPjz02P5wNhf2A7FAYHYEL8eVexXkD9jrpk2t0VBLTwfHcwNhHtugqShHmdws4EPkV/s1TcujoS9fSA8f2J5/oPfNMPBxtCJimOdouCioE4eGE1wX8vUz6dIFj5Nta33QAruSQUGZe3wMc0qLFku790iZ+onG91zfu7e5wf22RlZzBOiZ0GikTPAUzB20Vgni80auUJoAdZhd+BgsinOvAbcB7YsMg/7gHlso3A5gJ3YJkDT5Iex9yr3oskWVvxvnuwADABjiqdXWUAfwAAAAAElFTkSuQmCC'
    },
    singer: {
        intro: {
            desc: '个人简介',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAr1JREFUeNqkln9ozGEcxz/f891aLtfi3Maxzo79MZST0v6YX0cpoYxCE7VY+YMo/IVSavmxEqUohO4PpKtjLcymDdMsyc2P8sfYKWRtc8d0NN4f91Hnunu+3+fuqVfv7933eZ738+PzfJ6vQYrye/XmYsg2sAHMBxPBTxADHeC0EQk9IxvFUJjMgtwCVWAAPASfQLH8twgUgSMwO5yXEUxKIb1gEmgE19HZWEYdL+QiWAG24v3lfIyaIAfAcnTQpph1CYSXzgVmoG4yV11HlsZs3gDuqUz+jjIS+gE5DqbKUpJtIxTeGzdoJXvlvugCXSOvaL9NowHRcl2jEtFfpFeKdI1GRU2bBh7Rz7pGcVGXTaN5oq90jQZFp9g0WiL6RNcoJss3x6bRehBFqL/TMkIDDoKnPFKcKYdFLgxCKkHIajS5OropS7fGov1u8B2cz9foEhgCxzBqVVB0g71YhS+FZO96yBXwCNShs49UQHEo8thVyB5QA05SgcVUzMglQcHL4sx4x3u3HUyw6J8DKwLOmBkdcATVSxAE0mY8lFZnLSRM7snD5CkfVNok4k5638+RWWFKY06IJ8Am6fwNOCuH8DV4kdZ8J7k9w3TwKM+y1HLNboT6qLO90YRJNX7yvVMmm9+M/XmuaFpG/pkfoLNTcddF1PM4I/9PJ1q3MfXsq0zAyMkzOidrvQwGHdq7/C2BPDL6/39fR7IGw0KeSV4mXIIrU9iIOs66q7CE02AW0zZ6GcUuRiUN486sqc15jvbL1d0Js1ptIzZ50Jaip1udGWBQB7kgd1CrPN/BDEeynK8u8lf5aNc+r62BtN/tpfC1gJHWASfRQ2CLHNAxCfO34NS/LyLU48+wJloc7KMKX0JpEo+b1BIOUDLZYmQZMZvw7i4Fc4FfQr5Z3o+TM7cDjLeYDw/2Nn++/RFgAIsm1BnxzRncAAAAAElFTkSuQmCC'
        },
        dynamic: {
            desc: '我的动态',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5NJREFUeNq0lltIlEEUx//zbeauZmbppmZSkWUXyaioHuyiWVBkSUGgEiLR5aEgSAMJkkCMjIiuQkFE5EsUpQ9drQeJihIzwzKy1JAuGGleNhd3vv7zuaJ53e1bB+a7zOX85pw5c+YI/EfRN6dlQtNOQdetrPmitDjfWxniP6BLIMRLzJglMCEIqH6tmrcRfssbOZrX6mpaAWw2HbsPAJl7gVC7ZFue12K81HYxpEzG6mQNVptaBJC4XmNbHPvWjZ3GQuTB3yqRsLavbelKIGii0rqQcM3nYApdRUdKwRpqawvo6/DzA1K2K63j+ZfrUzChc6nRTUyeImnawQOWrgAWL1MWOcax6aa9mkJUfzqhF7mnAdifrSE8cujBTidw6ayOug9AVLRdXCho9hjsBkWxzmGNJzDDMOG0aB2ZewRCw0ZWQ8Hr6zh7Xi3/juDQvka4XMqqVTxujn/AhE3gOwcWyxZC5hhBobeER9CREjWsSOjxYG9LXo4TrS3juQUuzq/lIirYeoOLKBX6loxHhCVhVowyERBmZw0HIiKVt8JUafsNfP4INNYDTV+AL/USHR1Kg0KlsY5VSUDqDox5kRK4dpmGr+jWaIJKVL6UaPk19mBnl9Jcp+m/q/O3Cx3tDpwrlPjZPHbQ9jbgzAkdzT8kmVnC7c3LqXkZg77NODKhdt9Dz5+U+P5N0p/UhVJiuCo/XnAVSRzQhrPUvLXFt+YtOq33h/4TudzwtYQ7UXzFd+C7JWpfRX/ooJDJjkrCc/HhHfCx1jxUHafyJ3RlXO0PHS5WF3G/W/HiqXlw5SvA1a0Yx0e9JIzQJmUJat5I02BlOYuljjLfe3o7VaCzU4Oj0xz4x1eXO0x6fC22Gk+Hwxy4q8vYaW/APddQYKA58MRgjVFqujfgBUY64281B46YJgiO9xxssSziJG3YQP+1Caip7kltGz71mnRwUUmDlHZGxkkDu8YNnXrosYMyDRX2yu6Bx0zS6bQBKa+O+XECyRuB6Jl97ZFRvV9xrOUjgrm6AK7Sikkhbgf5Azx5ADy+L9HdrWL7bVYVDBqU+ynxHJ9AC2ThbVUwFtKym1JVEsH7PKhXbIhHOZe+dWcT7FMjEBMr8OqZNI6WEHdoiVyeyZph8jNlzoMcl823DQsWqeABvHurumdzXt3o4M1pG2i+6wQFU9BDanSME597mJGG8nUYlnHp0GUg5x7l3NMDx/0VYAAVuWZ0HivWFAAAAABJRU5ErkJggg=='
        }
    }
};

export default titles;
