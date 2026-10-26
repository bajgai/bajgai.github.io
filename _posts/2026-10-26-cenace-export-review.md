---
layout: post
title: "How to review a CENACE PML export before using it in analysis"
date: 2026-10-26 15:00:00 -0600
description: "An independent method for reviewing CENACE nodal price exports: define the scope, reconcile price components, preserve exceptions and document a human decision."
tags: cenace data-quality spreadsheets
categories: guides
---

A PML reconciliation result is one piece of evidence in a review. Before using an export, record which observations you checked, what the source fields mean and which use you are prepared to accept.

CENACE defines the nodal price as the sum of its energy, losses and congestion components. That gives you a useful arithmetic check. It does not, by itself, answer questions about the observations included in your file or the evidence supporting your analysis. [CENACE data dictionary, page 2](https://www.cenace.gob.mx/Docs/Cenace/Documentos/DatosAbiertos/DICCIONARIO/Diccionario_Datos_Abiertos_CENACE_MECP.pdf).

Here is an independent review method you can use with your own records.

## Define the review before opening the spreadsheet

Write down the intended use, system, market, node, operating dates and the physical rows you expect to review. Record the conditions that would prevent that use. Preserve the original export unchanged, alongside its retrieval date and source reference.

CENACE's SW-PML documentation identifies fields for system, market process, node, operating date, operating hour and price components. Map those meanings against the columns in your actual export; a third-party export may rename or add fields. [SW-PML technical manual, pages 4–5](https://www.cenace.gob.mx/DocsMEM/2022-06-24%20Manual%20T%C3%A9cnico%20SW-PML.pdf).

Keep node identifiers as text. Record the original hour label separately from any derived timestamp. If you cannot substantiate a time conversion or publication version, record that uncertainty before using the data for a purpose that depends on it.

## Keep population and arithmetic checks separate

Declare whether you are reviewing the whole export, a selected sample or identified batches. Account for exclusions and rows outside the selected sample. Retain the reasons for missing observations and duplicates instead of silently dropping them.

For a row with valid numeric inputs, calculate:

```text
residual = PML − (energy + losses + congestion)
```

Compare the absolute residual with a tolerance that you have justified and documented. Keep the signed residual so that an exception can be investigated. Missing or invalid inputs need an explicit NOT CHECKED outcome; replacing them with zero can hide an unresolved problem.

Choose the tolerance for the intended review and available source evidence. Changing it merely to remove red cells does not resolve the underlying question.

## What a bounded real-data check showed

Validation of the kit used 24 cached nodal PML observations for one SIN/MDA node and operating date. They were selected from a 960-record cached run; the other 936 records were outside the declared review scope.

| Selected observations | Result |
| --- | --- |
| 19 | Zero residual in independent decimal arithmetic |
| 5 | Residual of −0.01 MXN/MWh |
| Human decision | HOLD |

The diagnostic comparison used a tolerance of 0.00000001 MXN/MWh to absorb binary floating-point noise. That threshold was not a source-rounding allowance or an acceptance standard for other work. The five exceptions remained visible, and source publication/version evidence remained unknown.

LibreOffice and Excel for the web returned 19 PASS and five EXCEPTION results. Excel recalculated the test copy after its cached formula results were cleared. A separate blank-tolerance copy returned 24 NOT CHECKED results. The calculation tests did not establish that the selected observations were suitable for the intended analysis. [Published kit and tested scope](https://bajgai1.gumroad.com/l/cenace-export-review-kit).

## Leave a decision another reviewer can understand

Keep a short record with these fields:

| Field | What to record |
| --- | --- |
| Intended use | The specific analysis or review you are considering |
| Scope | Original file, selected population, exclusions and their reasons |
| Source evidence | Retrieval reference, field meanings and unresolved version/time questions |
| Arithmetic | Tolerance, its justification, rows checked and exceptions |
| Decision | ACCEPT, ACCEPT WITH LIMITATIONS or HOLD, with reasons |
| Follow-up | The evidence or correction required to resolve each blocker |

A HOLD should say what would resolve it. If you accept a limited use, identify that use explicitly so the decision is not mistaken for approval of the entire dataset.

## Optional review templates

I offer the independent [CENACE Export Review Kit for US$19](https://bajgai1.gumroad.com/l/cenace-export-review-kit): an English-language nine-page PDF guide, an eight-sheet XLSX workbook and fictional practice data. The supplied workbook supports up to 100 selected observations. It is a manual review toolkit; it does not retrieve data or certify an export.

The workbook has bounded LibreOffice and Excel-web calculation evidence. Desktop Excel, interactive Excel-web editing, dropdown/protection enforcement and edited-file save/reopen remain unverified. Read the full compatibility notes before choosing it for your workflow. The product and this review method are not affiliated with or endorsed by CENACE.
