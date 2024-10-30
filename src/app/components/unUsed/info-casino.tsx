'use client';
import React from 'react';
import axios from 'axios';

interface TableRow {
  name: string;
  value: string;
}

interface InfoCasinoProps {
  pretitle: string;
  title: string;
  subtitle: string;
  tableInfoCasino?: TableRow[]; // Повторяемые строки таблицы
}

const httpAddress = "http://62.84.182.126:1337"; // Адрес Strapi

const InfoCasino: React.FC<InfoCasinoProps> = ({ pretitle, title, subtitle, tableInfoCasino = [] }) => {
  return (
    <section className="info-casino__area section-pt-120 section-pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-10 col-md-12">
            <div className="section__title text-center mb-60">
              <p className="pretitle">{pretitle}</p>
              <h3 className="title">{title}</h3>
              <p className="subtitle">{subtitle}</p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-12">
            <div className="info-casino__table">
              <table className="table table-bordered">
                <tbody>
                  {/* Проверяем, что tableRows существует и не пустой */}
                  {tableInfoCasino.length > 0 ? (
                    tableInfoCasino.map((row, index) => (
                      <tr key={index}>
                        <td style={{ color: 'white' }}>{row.name}</td>
                        <td style={{ color: 'white' }}>{row.value}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={2}>No Data</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCasino;
