export function ConductorsTable() {
  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-auto">
      <h1 className="text-2xl font-semibold mb-4">
        Características eléctricas ACSR
      </h1>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-max w-full table-fixed">
          <thead className="bg-gray-100">
            <tr>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-r text-left text-xs font-medium text-gray-700"
              >
                Palabra clave
              </th>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700"
              >
                Área de aluminio, cmil
              </th>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700"
              >
                Trenzado Al/St
              </th>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700"
              >
                Capas de aluminio
              </th>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700"
              >
                Diámetro exterior,″
              </th>
              <th
                colSpan={3}
                className="px-3 py-2 border-b text-center text-xs font-medium text-gray-700"
              >
                Resistencia
              </th>
              <th
                colSpan={2}
                className="px-3 py-2 border-b text-center text-xs font-medium text-gray-700"
              >
                Reactancia @ 60 Hz
              </th>
              <th
                rowSpan={2}
                className="px-3 py-2 border-b border-l text-center text-xs font-medium text-gray-700"
              >
                RMG D pies
              </th>
            </tr>
            <tr>
              <th className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700">
                DC, 20 °C Ω/1000 pies
              </th>
              <th className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700">
                CA 20 °C Ω/milla
              </th>
              <th className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700">
                CA 50 °C Ω/milla
              </th>
              <th className="px-3 py-2 border-b border-r text-center text-xs font-medium text-gray-700">
                Xₐ inductiva Ω/milla
              </th>
              <th className="px-3 py-2 border-b text-center text-xs font-medium text-gray-700">
                X'𝚌 capacitiva MΩ·milla
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Waxwing</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                266,800
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                18/1
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.609
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0646
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3488
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3831
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.476
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1090
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0198
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Partridge</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                266,800
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.642
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0640
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3452
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3792
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.476
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1090
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0217
              </td>
            </tr>

            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Ostrich</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                300,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.680
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0569
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3070
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3372
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.458
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1057
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0229
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Merlin</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                336,400
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                18/1
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.684
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0512
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2767
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3037
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.462
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1055
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0222
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Linnet</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                336,400
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.721
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0507
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2737
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.3006
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.451
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1040
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0243
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Oriole</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                336,400
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                30/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.741
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0504
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2719
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2987
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.445
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1032
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0255
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Chickadee</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                397,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                18/1
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.743
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0433
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2342
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2572
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.452
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1031
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0241
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Ibis</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                397,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.783
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0430
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2323
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2551
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.441
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1015
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0264
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Pelican</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                477,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                18/1
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.814
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0361
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1957
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2148
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.441
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1004
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0264
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Flicker</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                477,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                24/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.846
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0359
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1943
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2134
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.432
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0992
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0284
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Hawk</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                477,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.858
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0357
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1931
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2120
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.430
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0988
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0289
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Hen</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                477,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                30/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.883
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0355
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1919
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.2107
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.424
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0980
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0304
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Osprey</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                556,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                18/1
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.879
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0309
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1679
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1843
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.432
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0981
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0284
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Parakeet</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                556,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                24/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.914
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0308
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1669
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1832
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.423
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0969
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0306
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Dove</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                556,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.927
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0307
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1663
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1826
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.420
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0965
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0314
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Rook</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                636,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                24/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.977
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0269
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1461
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1603
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.415
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0950
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0327
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Grosbeak</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                636,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.990
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0268
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1454
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1596
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.412
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0946
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0335
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Drake</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                795,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                26/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">2</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.108
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0215
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1172
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1284
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.399
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0912
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0373
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Tern</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                795,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.063
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0217
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1188
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1302
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.406
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0925
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0352
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Rail</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                954,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.165
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0181
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0997
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1092
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.395
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0897
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0386
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Cardinal</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                954,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                54/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.196
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0180
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0988
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1082
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.390
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0890
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0402
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Ortolan</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,033,500
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.213
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0167
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0924
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.1011
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.390
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0885
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0402
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Bluejay</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,113,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.259
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0155
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0861
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0941
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.386
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0874
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0415
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Finch</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,113,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                54/19
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.293
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0155
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0856
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0937
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.380
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0866
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0436
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Bittern</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,272,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.345
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0136
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0762
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0832
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.378
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0855
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0444
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Pheasant</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,272,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                54/19
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.382
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0135
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0751
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0821
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.372
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0847
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0466
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Bobolink</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,431,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.427
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0121
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0684
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0746
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.371
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0837
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0470
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Plover</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,431,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                54/19
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.465
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0120
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0673
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0735
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.365
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0829
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0494
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Lapwing</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,590,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                45/7
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.502
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0109
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0623
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0678
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.364
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0822
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0498
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Falcon</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1,590,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                54/19
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">3</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.545
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0108
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0612
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0667
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.358
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0814
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0523
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-3 py-2 text-sm text-gray-800">Bluebird</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                2,156,000
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">
                84/19
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-center">4</td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                1.762
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0080
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0476
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0515
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.344
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0776
              </td>
              <td className="px-3 py-2 text-sm text-gray-600 text-right">
                0.0586
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
