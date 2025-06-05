---
title:          "SLOTHE : Lazy Approximation of Non-Arithmetic Neural Network Functions over Encrypted Data"
date:           2025-08-13 01:00:00 KST
selected:       true
pub:            "USENIX Security Symposium (USENIX Sec)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2025"

abstract: >-
  Existing works adopt an eager approximation (EA) strategy to approximate non-arithmetic functions (NAFs), which statically replaces each NAF with a fixed polynomial, locking in computational errors and limiting optimization opportunities. We propose SLOTHE, a lazy approximation (LA) solution that recursively decomposes NAF codes into arithmetic and nonarithmetic sub-functions, selectively approximating only the non-arithmetic components when required.
# cover:          /assets/images/covers/cover3.jpg
authors:
  - Kevin Nam*
  - Youyeon Joo*
  - Seungjin Ha
  - Yunheung Paek#
links:
  Paper: https://www.usenix.org/system/files/conference/usenixsecurity25/
  Code: https://github.com/SNUSOR-PECT/SLOTHE
  Zenodo: https://zenodo.org/records/15572278
---
