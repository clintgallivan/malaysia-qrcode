import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <body>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">&nbsp;</div>
            <div class="col-sm-6">
              <center>
                {' '}
                <img
                  src="logo.png"
                  width="50%"
                  height="50%"
                  class="img-responsive"
                  alt="Makmal Kesihatan Awam Kebangsaan"
                />
                https://simka-outbreak.moh.gov.my
              </center>
            </div>
            <div class="col-sm-3">&nbsp;</div>
          </div>

          <form class="form-horizontal">
            <div class="row">
              <div class="col-sm-3">&nbsp;</div>
              <div class="col-sm-6">
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param2">
                    Nama Pesakit / <i>Patient Name</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="email"
                      class="form-control"
                      value="SHANNA GALLIVAN"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param3">
                    ID Pemohon / <i>Patient ID</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="text"
                      class="form-control"
                      value="530569 ******* (6 digit pertama / first 6 digits)"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param3">
                    Makmal Rujukan / <i>Reference Laboratory</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <textarea
                      style={{ backgroundColor: '#eee' }}
                      rows="2"
                      class="form-control"
                      readonly
                    >
                      KLINIK PRO MEDIC (KOTA KEMUNING)
                    </textarea>
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param1">
                    No. Rujukan Makmal / <i>Lab Reference No.</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="email"
                      class="form-control"
                      value="KPM/APRL26/MYEGS15"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param3">
                    Tarikh Makmal Terima Spesimen /{' '}
                    <i>Date Received Specimen in Lab (dd-mm-yyyy)</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="text"
                      class="form-control"
                      value="26-04-2022"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param3">
                    Nama Ujian / <i>Test Name</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="text"
                      class="form-control"
                      value="Rapid Antigen Test"
                      readonly
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-4" for="param3">
                    Keputusan Ujian / <i>Test Result</i> :{' '}
                  </label>
                  <div class="col-sm-8">
                    <input
                      style={{ backgroundColor: '#eee' }}
                      type="text"
                      class="form-control"
                      value="Negative"
                      readonly
                    />
                  </div>
                </div>
                Sebarang semakan lanjut atau aduan boleh dikemukakan kepada
                makmal rujukan diatas.
                <br />
                <i>
                  Any further review or complaint can be submitted to the above
                  reference laboratory.
                </i>
              </div>
              <div class="col-sm-3">&nbsp;</div>
            </div>
          </form>
        </div>
      </body>
    </>
  );
}
