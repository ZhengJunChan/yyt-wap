const titles = {
    tag: {
        music: '音乐标签',
        sheet: '歌单标签',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAzdJREFUeNq8l11Ik1EYx//vnE6tWBlmYVRoqVFGmpJgDLPcNIsU7INB3gZBF10WVERRdNFNEIGCXkhBVyXGxCUploUhWZo6TLKp4Edi6fyctrf/2ZfonM1N98D/nLPznvf9nfOe5zzvMwkBmFxwKZ7VXSqf2kA1UUbqjWhLryr+ertXCgB6lFUN9h8YxXn9DEJClDD3/Ebzpyh0tMdjzjrO62+dE6nhJHoCBjuhRqSmDUFfvIft0CVDrBgf/46Ob9OcSCwntAOyXM/+Yk6gzy+wD1BPs9nGYDSYUWscJfi46FKsO9ROUaihy9/NOovPEPdBuWZQmw1ofNeOluYpqMJlnNTFIn5v7MKmSmokJJph6tTyV4lyzaAP77VheCjZ3WfqAHLzW6E7dcjdl5E5TLBOgBU+Q9MzBry+3g9cqQM6RF2mHtj7awyJmJiYdY9LTIphmc1nhih8gh7T9OOCfp/XPW35POVs3ZKqnpdQN9iupier0GVaOEahYbsQvU04dLrCJ2hBUdKKjhjOPXWY3XHkM/oQVjud18IWjc3I7GapVQQMFZad43Ki64QaWH+hkqFUDiAhKW7R2MMpKpY5ioChwoT3CkeSJLGfedRBO/TqNZ6bJf4bGblJrFsZMNRlwnszNbPo6jRBFRFGR4rzgAobGRlluUVaE6jPwUCeweNHf9DXWycFFVpeOsD4HcVfqUpC0+xQbZ6ZSsZ62AJ0q/BoxusfYmVPGN5+BhHa5IrV6cjJ/RVMqOvrNArZNh9MqAtcjsqXY8GEusC38fG9BcbqtlU93GoF2r4KyKqhdjAviACvJXjaAy4e/uIZMDjgCS19CpSVgCnOqqHuDIQDxKvWESwtgs+JVbUCdbULd8zPOaDdXUDRRUCtXjXUI+fimY62Z4baPNl9vCwWkboADXVAyhHgdSXQzrkVngM0WX5Bl032loXPTAN3bvIVzzqyjdNngRNav6Fes0wnvJHgGTe81wwYqvixYyaTqQkIumJ6S7j4kNcTPLVsVAsA+t+82itclqcJHfQX6lNC74Q3MMuYoDZictKCirIY9PdF+Av1+Z8E4dtZ3acKqc32/QeuENrqb3D7J8AA/UHFWejEbEEAAAAASUVORK5CYII='
    },
    gifts: {
        text: '收到的礼物',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwVJREFUeNq0lltIFGEUx/87u0pCPXShICMvqxGWD4GVt5J6N1KwvEARXdCtl57Up3owNCIo8lK4YA9hZmFJgc9a6iamQYjYrrQZ1UNBGra7ra3T/8xstqur7qp74Ow3OzPn//vOfOc7MwYEmJpfqnAooZfRD9A306fpw/THdKvheat7Xsx6DuX0Qno6Xf5/o/fTWyWOMbP/7jcEBKZyeITEpH3IzgUSkoC4OGByEhgbBV52Az+nPstkKNDtjznCoQ0bN21F3lEgJYW4DYCbc3J+ILIXmHAO8Z5ixtjngAw0w2i0oaBoC3IOIaTNzAAd7YCtT2ZbLWH0Wk7OiMIiwGgKHdfbAzx98h0+Xyah4wbCBDqAEyUZyGJms9SzcWaDA8DUFFBUDOxO+y9g6wM6OwCFYfkFQGY2lrX+V0D7w0FZJpP27M2pOkyyaG4C7GP644zfAayLCw4WwMEs/4IYEJaJ9tBgBhz2QpNWILmH9Qsvnumw3DzgGGcfExNaIFxQoOWQ4bCXCTAbZi62hwvdy9STzdDWZCWiS5kwyJJtsE2rLKcT8P0B9meuPUxMGGQJ0KOVcYxJr7SdCYiKubXt6xGgHZ8+MmVuwxu3gO3x0QEKgywBduF1/8qLIVwbsMlvlwAb8HboN8Yd0YOJ9vAbr7AU7v4JqGoNWpqBr1/WHiaa96lNhrAU/+lr+DV9F4231xYqWqI5TW2gZn7zluNGdphylF9itSauDjbBbXavAXC5BGZhdtJ7ocw1D/2EheV7B031esBqYKLhctUHwoIynPeOq2MPrcQFC5CUHBlMXkuSmcd9naCqBV1xsTgNGhtbifMVfM/tCg/meK83f683JCzokS6YiQR4vVc0AREKH3Z1MdiSGQZkWsVMa3H6LJC2N/RNoyMsfavAqgmrW0ovrNaiQY2mWpw5B+xJD7448g5osUrjXxYWkRFqUY+fUtXOHlV1/NBdjuVcfunFcHUMEUIroCiNOMmPOoXL3/aAmfmk7JuiAvRDuZi4STfSLxNmjST+rwADAKCDJYeCtNiUAAAAAElFTkSuQmCC'
    },
    intro: {
        music: '音乐简介',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAcCAYAAACUJBTQAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAepJREFUeNrslk9Ik2Ecxz8TDyN2cEnvDgu9bBdBsc51miADxenBQ7AFkUdl1qVLhyxC1KToYBe7BB48qKAha5FU3i0bKkwoZkLuoB52GIjO77MJSbB8N946ZD/48r7Pn9/3+3t/z+95n8dViERdwD1hULiEc5YVxoWR2qKA5XtMezu43c5J5PMWicQw2R2MSJxYDBobcdx8PhgbHazRq4Vl8UesxOur4S/YvyNSW3bk0wqsrcHRkY1QFWtTE7ReqVBkZgb29uyHu7FRhUg8Dt+37Ytc9leRrov1JfyvLlvp2tZ6bKZVXQUboeofGwiC31+hyIsJ2N+3H25dHTx8VKFI7Cak0/ZFgsEq0mWcfuN4PqvrvIoUtGe+fXVwM/5qppxnZ2ErAw0N0N2jDRhwSCSbLZGnvpjWvPCcTGaAZ087aGmBrghn3RHKi+RysLgIyx/NwfVZPXdcc6/enYwmdV9rY3V1nFSqmWvXIRwGj6fsmuQ5PPzZc3AgiiQMPYAP739I4LZ6r54SKJrab/Vo1Xif5u0U5xs/43+aS/wuRTRJqO0WoRCsr8PrBdjdzWvwiTAsstyZ9RCJek5uoXfxet10dJaO4zcJWFp6aUQuFPMMN8x8YVq4L/KtSqtIXKoIhoRe87HClNB/LMAANqmOuPz9PXAAAAAASUVORK5CYII='
    },
    sheet: {
        music: '包含该歌曲的歌单',
        sheet: '推荐的歌单',
        icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRTI3RDU1QTQ5RUIxMUU4QjU0QkI3M0YwRTEwNzVCQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRTI3RDU1QjQ5RUIxMUU4QjU0QkI3M0YwRTEwNzVCQyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJFMjdENTU4NDlFQjExRThCNTRCQjczRjBFMTA3NUJDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJFMjdENTU5NDlFQjExRThCNTRCQjczRjBFMTA3NUJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JhC9iwAABqNJREFUeNrEWWlsVFUU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'
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
            desc: 'TA的动态',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAdCAYAAAC9pNwMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5NJREFUeNq0lltIlEEUx//zbeauZmbppmZSkWUXyaioHuyiWVBkSUGgEiLR5aEgSAMJkkCMjIiuQkFE5EsUpQ9drQeJihIzwzKy1JAuGGleNhd3vv7zuaJ53e1bB+a7zOX85pw5c+YI/EfRN6dlQtNOQdetrPmitDjfWxniP6BLIMRLzJglMCEIqH6tmrcRfssbOZrX6mpaAWw2HbsPAJl7gVC7ZFue12K81HYxpEzG6mQNVptaBJC4XmNbHPvWjZ3GQuTB3yqRsLavbelKIGii0rqQcM3nYApdRUdKwRpqawvo6/DzA1K2K63j+ZfrUzChc6nRTUyeImnawQOWrgAWL1MWOcax6aa9mkJUfzqhF7mnAdifrSE8cujBTidw6ayOug9AVLRdXCho9hjsBkWxzmGNJzDDMOG0aB2ZewRCw0ZWQ8Hr6zh7Xi3/juDQvka4XMqqVTxujn/AhE3gOwcWyxZC5hhBobeER9CREjWsSOjxYG9LXo4TrS3juQUuzq/lIirYeoOLKBX6loxHhCVhVowyERBmZw0HIiKVt8JUafsNfP4INNYDTV+AL/USHR1Kg0KlsY5VSUDqDox5kRK4dpmGr+jWaIJKVL6UaPk19mBnl9Jcp+m/q/O3Cx3tDpwrlPjZPHbQ9jbgzAkdzT8kmVnC7c3LqXkZg77NODKhdt9Dz5+U+P5N0p/UhVJiuCo/XnAVSRzQhrPUvLXFt+YtOq33h/4TudzwtYQ7UXzFd+C7JWpfRX/ooJDJjkrCc/HhHfCx1jxUHafyJ3RlXO0PHS5WF3G/W/HiqXlw5SvA1a0Yx0e9JIzQJmUJat5I02BlOYuljjLfe3o7VaCzU4Oj0xz4x1eXO0x6fC22Gk+Hwxy4q8vYaW/APddQYKA58MRgjVFqujfgBUY64281B46YJgiO9xxssSziJG3YQP+1Caip7kltGz71mnRwUUmDlHZGxkkDu8YNnXrosYMyDRX2yu6Bx0zS6bQBKa+O+XECyRuB6Jl97ZFRvV9xrOUjgrm6AK7Sikkhbgf5Azx5ADy+L9HdrWL7bVYVDBqU+ynxHJ9AC2ThbVUwFtKym1JVEsH7PKhXbIhHOZe+dWcT7FMjEBMr8OqZNI6WEHdoiVyeyZph8jNlzoMcl823DQsWqeABvHurumdzXt3o4M1pG2i+6wQFU9BDanSME597mJGG8nUYlnHp0GUg5x7l3NMDx/0VYAAVuWZ0HivWFAAAAABJRU5ErkJggg=='
        }
    },
    music: {
        playIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMUU2RUI1NDQ5RUIxMUU4ODg3OUVGNjIyMzdBMzVFMiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMUU2RUI1NTQ5RUIxMUU4ODg3OUVGNjIyMzdBMzVFMiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxRTZFQjUyNDlFQjExRTg4ODc5RUY2MjIzN0EzNUUyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxRTZFQjUzNDlFQjExRTg4ODc5RUY2MjIzN0EzNUUyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3k8pOQAABR9JREFUeNrUWVtsVFUUXTO9tECLNYBiH2IplWIioCAGQRGFijGiRT+M2EZj1Q9NG2mMYmOi0aTqjzX4TYy2IipGAkYksVhMB4X6iCBxCphIU2uqTGJby0Mede2zz3Q6w5SeO3Qa2MnOmfs6e91993sCSIEGVq0Zx2UJeTl5Pnk2eRo5297ST+4mt5N/IDeTQ4FtG0/5lRXwCayESw35YfJUn7KOkj8kryfQw6MKkMDyuNSTK8kZ5uSUKcDcOcCsa4H8fMLl8fjx+sCJE4QTAbq6gIOHgH37gUgkut0ZchP5RQL984IBElwVlwbyJAR4+8KbgBXLFVjA8QMMDCjQr/il277XY6CPvJYgN6QEkMAyucjDFebEbJpZ5SNAYQEuiDr/ABo/AMLh6BnRZhWB/ucMkOByuWwhL4Pn0eIeojvc6a4xF40276RFfgScPi1nWsjlBNkzIkCruR0GXDadsvZZoGQm0kKHfwPeeps+3x8FuTJRk8Ekj20YBFf3QvrACcneIiPbRKdlVjaGBWgdosJ8VtFcYSHSTiJDZIlMyrYYzgVoQ0mDORCbS6fmkmlSZCo1WCznaLDehBLxVnGIsSaRKbIFA/B6HECbISqNl0ooGS1v9ZXT4mRXWEzw7OUakyEkCPuJc3vbgG2fA8eOA1cxFd8wD1i0iDrISdEeCzQR7G3LsJhqAjbxd5ncWrcOKJ3ltllHB/Dyq8DZs/Hnx3G7W1lH3HcvMHmyf5DtB2lsb0Rzd75nq5KpJrdK+nKlnS0K7uaFwOpy4BBTWWi3Cvia11pDQBlTYvn9QFaW+76CQbBEIlKMLPFsyaSJ34/thdutcd/B98xTvn0p8PsRYPOnwP5fgC++BPbQDB5ljTFvrrstChZ5Se4etPWcP+2dYlnX3a2bFRXFXyu6BniuFlj3PFBQoFWMZItNH0eLBDctKi0I2mJTSyZX+qdHP2/uZbESK5Gu47avvUJbXKUvsp3afL/Rbf8YltKgrYS1nnOl48d0zZl0/vsy6IwPrgaqn+HvoNrtz/tG3j+GZVpwsEwfThPJ6ORJG0UdbXYBrejulfr7uz0j3x/Dkh1MMar6f6SnV9eJE3w9FrQNjpbprpSVqWtiDByOtmzVsBMMqqePRDEs/Z7tvopND5HjmAEmTNS179/z39fHqv7d99jX/ajHlSzOp093aK8G+5duARg2AKXBkRDhQpfnqmf29qo9JgbiM9RsayvwyWZ9CSmlHn+MYXex2/6CRelXASivd49pahbf4raBpLMrr+D7/QUc6YjFLYlz0hR9xm6hyzZsxTOAp54A8vL8pTulnzzbVL9kWkMR4JpNSkoUYMsu1dCBA8Cub4C/j+r1XGr5AabApbep7fnpVyQLKTULwJBJzJL7RIuuxYLUb7u/1fwrPPTzl5UBd60AMjP9e7tg0B5a3jTkyTiCFY10/NWmb3UFOLMYeJLV+fYd6s1Xs3Sff6PGPM9LvS4UDEobBVt0p/Xkp2k/GaZvda0JxehdDd+1ZxYb1unDO4MVtZ2VNJrvL021a1IfTTKym6KyG6Pzm6HWW2fGEdLxS1M91iQytYTrtVjimyY7yFlrDqTjl6Z6rEhkiUyl2qFDpTj/t4OcJjOOkBquszP94ESGyNIRSFPiMClZgKoyYwgZR9S/mV5Nyt4iIzb6qLr0h0fDj99KNdlfDOO3S2KA6TQCnnO9Zh7/I2BpTupGZQScZIheTV5zUQ3RkwB1/RsibMu5lP+G+F+AAQAzC9qjMBbbRQAAAABJRU5ErkJggg==',
        pauseIcon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDI3RkIyODQ5RUIxMUU4QjkyM0QyQjdDRDgwQzc0RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDI3RkIyOTQ5RUIxMUU4QjkyM0QyQjdDRDgwQzc0RiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwMjdGQjI2NDlFQjExRThCOTIzRDJCN0NEODBDNzRGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwMjdGQjI3NDlFQjExRThCOTIzRDJCN0NEODBDNzRGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jaYuhwAAA5RJREFUeNrUmU9IFFEcx7/zljQwyUKTUDsZekgoL5F2iAw6VNDVMAj2LgZR6KkuShEkXUMI3OoUBREVZHRIu1lgB40u+QcxOmjmQcXdft/33va23ZVmdFefX/gx4+zM/D68mXnv9/0ZYANKXbi0SzatEm0SzRKNEtUSZfaUJYk5iXGJUYkhieHgxePVqLmCiGD1sumUaJeozDmhpMRsV1byXf5T4onEfQH9VlBAATsomz6JDomYPlhbAzQdARoagBr5uVJ4lTIXJJOCIzwzs8DEBDD2BZieSd9uTSIh0S2gs5sGFLg4gqAfqdQexITtZAtwRp7sobpoz2pyCngrT/rDiCAKYxD8lnt2CeTAhgAFjM9rwI4acOyo7LWbkdqMOLIJedKfPqePcDTjAroSGlDg9srmucQplJYCVy4DLSdQUI18BB4OAsvL/Ou9xEWBXPgvoB25NxquogK4dhWoq0VRNDUN3L0HzM+nIc9mj6TKc9nAX7ieG8WDo3hv5mAu5jS5sS6g/iD4zvGxcuSqD6DoYg7mYk7JbRlyAfVUwq+V4jtXzJHLN5LMqV+6oN9Oazkj2KenEn6thf4gwog5mZsMZs51gHaF6NDzHKeS7RJzx2LpR12fOYKdeoXgJBxlnlv4BQw+MpNvtniMv/GcsGJuMpjVqlMD2oXfDBtXiCh69VpWh3fAA/n4Fhfdce7zGH/jOVHkGNrJpmxVUqnX1qjLVyaUmXBz9zPPCSMykMUUI63Klkxm4fdFjqVN2XrOVCW+yLE0K1tsmpLJFzmWRmUr4c1XKYWUY6lWukxnJayUP4BkMdV5mUdU67Bqg0MPwTLdF5HF+JolZd2XqXR9kWOZU9YaGoPjixzLuLK+1bgvX+RYRpU11cYa+iLHMkTAYW2q6VtpDaOovNztm4o4dz/znLD21HhovojDsVtfx5I3G5pYJRxHcs0UjaErYblsdVVWzNPA4fp/AauqgP37gPPngN2l4e/59BnwfVJ7IzFQL4OMgnVcisUY7vRu36rCr/d6D409uw+NbJHoidr2ShLa8dNUb5eYW7Mhke7fZK4k3bodQcdPU73VYk7mJgNZsk2TbuSkUl36Dzp+muqtEnMxp37fdL9mNq8vto2chK6I6fjnfhQfjjmYy1ThiexmUr5iIa7bEGxH9N4u7kjy3szhWh/xnd882hHtt5x+jY8NzCxIf1vAWaB+NtHzgG7ZvyH+CDAACxB5efP7qF4AAAAASUVORK5CYII='
    }
};

export default titles;
